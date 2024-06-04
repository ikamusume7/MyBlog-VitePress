import { defineConfig } from "@lando/vitepress-theme-default-plus/config";
import { withPwa } from "@vite-pwa/vitepress";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    titleTemplate: ":title - IKA'BLOG",
    description: "A Small Blog",
    base: "/",
    cleanUrls: true,
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      // https://vitepress-theme-default-plus.lando.dev/config/config.html
      collections: {
        post: {
          frontmatter: {
            collection: "post",
          },
          patterns: ["posts/**/*.md"],
        },
      },
    },
    markdown: {
      lineNumbers: true,
    },
    rewrites: {
      "pages/home.md": "index.md",
      "pages/archives.md": "archives.md",
      "pages/categories.md": "categories.md",
      "pages/tags.md": "tags.md",
      "pages/links.md": "links.md",
      "pages/about.md": "about.md",
    },
    pwa: {
      mode: "development",
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "VitePress PWA",
        short_name: "VitePressPWA",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt,woff2}"],
      },
      experimental: {
        includeAllowlist: true,
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallback: "/",
      },
    },
  })
);
