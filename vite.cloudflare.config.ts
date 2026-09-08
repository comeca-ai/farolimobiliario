import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Workers-first Cloudflare build. The default vite.config.ts stays on the Vercel
 * Nitro preset so the Grok preview / platform deploy keep working.
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
