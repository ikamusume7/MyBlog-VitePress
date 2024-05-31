import createContentLoader from "@lando/vitepress-theme-default-plus/ccl";
import { render } from "vue";

const siteConfig = globalThis.VITEPRESS_CONFIG;

export default createContentLoader(["posts/**/*.md"], {
  siteConfig,
  excerpt: true,
  render: true,
});
