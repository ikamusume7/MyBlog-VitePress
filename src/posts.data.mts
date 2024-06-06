import { createContentLoader } from "vitepress";
import { sync as spawnSync } from "cross-spawn";
import { basename, dirname } from "path";

export default createContentLoader(["posts/*/*.md"], {
  excerpt: true,
  transform(rawData) {
    const getGitTimestamp = (file: string) => {
      const cwd = dirname(file);
      const fileName = basename(file);
      const creationTime = spawnSync(
        "git",
        ["log", "--diff-filter=A", '--format=%at"', fileName],
        {
          cwd,
        }
      )
        .stdout.toString()
        .trim();
      const lastModifiedTime = spawnSync(
        "git",
        ["log", "-1", '--format=%at"', fileName],
        {
          cwd,
        }
      )
        .stdout.toString()
        .trim();
      const createDate = new Date(parseInt(creationTime) * 1000)
        .toLocaleDateString("zh-CN")
        .replace(/\//g, "-");
      const updateDate = new Date(parseInt(lastModifiedTime) * 1000)
        .toLocaleDateString("zh-CN")
        .replace(/\//g, "-");
      return { createDate, updateDate };
    };
    rawData.forEach((data) => {
      if (
        data.frontmatter.createDate === undefined ||
        data.frontmatter.updateDate === undefined
      ) {
        const { createDate, updateDate } = getGitTimestamp(
          process.cwd() + data.url + ".md"
        );
        data.frontmatter.createDate = createDate;
        data.frontmatter.updateDate = updateDate;
      }
    });

    return rawData.sort((a, b) => {
      return (
        +new Date(b.frontmatter.createDate) -
        +new Date(a.frontmatter.createDate)
      );
    });
  },
});
