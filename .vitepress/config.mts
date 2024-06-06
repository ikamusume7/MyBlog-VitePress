import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import container from "markdown-it-container";
import { renderSandbox } from "vitepress-plugin-sandpack";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    titleTemplate: ":title - IKA'BLOG",
    description: "A Small Blog",
    base: "/",
    cleanUrls: true,
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
      [
        "link",
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      [
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
          rel: "stylesheet",
        },
      ],
    ],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      // https://vitepress-theme-default-plus.lando.dev/config/config.html
    },
    markdown: {
      lineNumbers: true,
      config(md) {
        md
          // the second parameter is html tag name
          .use(container, "sandbox", {
            render(tokens, idx) {
              return renderSandbox(tokens, idx, "sandbox");
            },
          });
        md.use(timeline);
      },
    },
    vite: {},
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
