import { defineConfig } from "@lando/vitepress-theme-default-plus/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
});
