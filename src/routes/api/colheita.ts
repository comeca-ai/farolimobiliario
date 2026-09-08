import { createFileRoute } from "@tanstack/react-router";
import { COLHEITA_HOSTS, isColheitaHost, unwrapBrowserResult } from "@/lib/harvest";

export const Route = createFileRoute("/api/colheita")({
  server: {
    handlers: {
      GET: async () => {
        const { env } = await import("cloudflare:workers");
        return Response.json({
          ok: true,
          browser: Boolean(env.BROWSER),
          hosts: COLHEITA_HOSTS.length,
        });
      },
      POST: async ({ request }) => {
        const { env } = await import("cloudflare:workers");
        const key = request.headers.get("x-farol-colheita");
        if (!env.HARVEST_KEY || key !== env.HARVEST_KEY) {
          return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
        }
        if (!env.BROWSER) {
          return Response.json({ ok: false, error: "browser-binding-ausente" }, { status: 503 });
        }
        let url = "";
        try {
          const body = (await request.json()) as { url?: string };
          url = String(body.url ?? "");
        } catch {
          return Response.json({ ok: false, error: "json" }, { status: 400 });
        }
        let parsed: URL;
        try {
          parsed = new URL(url);
        } catch {
          return Response.json({ ok: false, error: "url" }, { status: 400 });
        }
        const host = parsed.hostname.toLowerCase();
        if (!isColheitaHost(host)) {
          return Response.json({ ok: false, error: "host" }, { status: 400 });
        }
        let result: unknown;
        try {
          result = await env.BROWSER.quickAction("content", {
            url: parsed.toString(),
            gotoOptions: { waitUntil: "networkidle2", timeout: 45000 },
            rejectResourceTypes: ["image", "media", "font"],
            userAgent:
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
            setExtraHTTPHeaders: { "accept-language": "pt-BR,pt;q=0.9,en;q=0.8" },
          });
        } catch (err) {
          return Response.json(
            { ok: false, error: "browser", detail: String(err).slice(0, 280) },
            { status: 502 },
          );
        }
        const html = (await unwrapBrowserResult(result)).slice(0, 1_800_000);
        const blocked = /just a moment|cf-challenge|attention required|access denied|radware/i.test(
          html,
        );
        return Response.json({
          ok: html.length > 80 && !blocked,
          host,
          bytes: html.length,
          blocked,
          html,
        });
      },
    },
  },
});
