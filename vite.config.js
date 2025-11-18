import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/diodemos/", // keep this!
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Dio Demos",
        short_name: "DioDemos",
        description: "Infordio Demos",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/diodemos/", // MUST match your GitHub Pages base
        scope: "/diodemos/", // IMPORTANT for GitHub Pages
        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/icon-512-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        // Cache all static assets automatically
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
