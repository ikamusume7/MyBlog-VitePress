import { defineConfig } from "@lando/vitepress-theme-default-plus/config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IKA'S BLOG",
  description: "A Small Blog",
  base: "/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // https://vitepress-theme-default-plus.lando.dev/config/config.html
  },
  markdown: {
    lineNumbers: true,
  },
});
