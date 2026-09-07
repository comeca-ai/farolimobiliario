import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Cloudflare Workers production build (source of truth for farolqueprotege.com.br).
 *
 * Default vite.config.ts still uses Nitro vercel only for the Grok live-preview
 * contract. Ship path is always this config + Wrangler.
 */
export default defineConfig({
  resolve: { tsconfigPaths: true },
  build: {
    target: "es2022",
    cssMinify: true,
    reportCompressedSize: true,
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});
