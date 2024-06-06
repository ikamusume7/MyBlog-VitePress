import { type ContentData } from "vitepress";

interface Categories {
  [key: string]: ContentData[];
}

export const sortPostsByCategory = (posts: ContentData[]) => {
  const categories: Categories = {};
  let categoryCount = 0;
  posts.forEach((post: ContentData) => {
    const category = post.frontmatter.category;
    if (!categories[category]) {
      categories[category] = [];
      categoryCount++;
    }
    categories[category].push(post);
  });

  return { categories, categoryCount };
};

interface Dates {
  [key: string]: ContentData[];
}

export const sortPostsByDate = (posts: ContentData[]) => {
  const dates: Dates = {};
  posts.forEach((post: ContentData) => {
    const date = post.frontmatter.createDate.split("-");
    const yearMonth = date[0] + "年" + date[1] + "月";
    if (!dates[yearMonth]) {
      dates[yearMonth] = [];
    }
    dates[yearMonth].push(post);
  });

  // // 根据post的createDate倒序排序
  // for (const date in dates) {
  //   dates[date].sort((a, b) => {
  //     return (
  //       new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
  //     );
  //   });
  // }

  return dates;
};

interface Years {
  [key: string]: ContentData[];
}

export const sortPostsByYear = (posts: ContentData[]) => {
  const years: Years = {};
  posts.forEach((post: ContentData) => {
    const year = post.frontmatter.createDate.split("-")[0];
    if (!years[year]) {
      years[year] = [];
    }
    years[year].push(post);
  });

  // 根据post的createDate倒序排序
  for (const year in years) {
    years[year].sort((a, b) => {
      return (
        +new Date(b.frontmatter.createDate) -
        +new Date(a.frontmatter.createDate)
      );
    });
  }

  return years;
};

interface Tags {
  [key: string]: { count: number };
}

export const sortPostsByTag = (posts: ContentData[]) => {
  const tags: Tags = {};
  let tagCount = 0;
  posts.forEach((post: ContentData) => {
    const postTags = post.frontmatter.tags;
    postTags.forEach((tag: any) => {
      if (!tags[tag]) {
        tags[tag] = { count: 0 };
        tagCount++;
      }
      tags[tag].count++;
    });
  });

  return { tags, tagCount };
};
