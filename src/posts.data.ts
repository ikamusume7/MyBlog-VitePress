import createContentLoader from "@lando/vitepress-theme-default-plus/ccl";

const siteConfig = globalThis.VITEPRESS_CONFIG;

export default createContentLoader(["posts/*/*.md"], {
  siteConfig,
  excerpt: true,
  render: true,
});
