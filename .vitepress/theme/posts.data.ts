import createContentLoader from "@lando/vitepress-theme-default-plus/ccl";

const siteConfig = globalThis.VITEPRESS_CONFIG;

console.log("siteConfig", siteConfig);

export default createContentLoader(["posts/**/*.md"], {
  siteConfig,
  excerpt: true,
  render: true,
  // transform(raw): Post[] {
  //   return raw
  //     .map(({ url, frontmatter, excerpt }) => ({
  //       title: frontmatter.title,
  //       url,
  //       excerpt,
  //       date: formatDate(frontmatter.date),
  //     }))
  //     .sort((a, b) => b.date.time - a.date.time);
  // },
});
