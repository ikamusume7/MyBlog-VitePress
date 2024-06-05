export const sortPostsByCategory = (posts) => {
  const categories = {};
  let categoryCount = 0;
  posts.forEach((post) => {
    const category = post.frontmatter.category;
    if (!categories[category]) {
      categories[category] = [];
      categoryCount++;
    }
    categories[category].push(post);
  });

  return { categories, categoryCount };
};

export const sortPostsByDate = (posts) => {
  const dates = {};
  posts.forEach((post) => {
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

export const sortPostsByYear = (posts) => {
  const years = {};
  posts.forEach((post) => {
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
        new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
      );
    });
  }

  return years;
};

export const sortPostsByTag = (posts) => {
  const tags = {};
  let tagCount = 0;
  posts.forEach((post) => {
    const postTags = post.frontmatter.tags;
    postTags.forEach((tag) => {
      if (!tags[tag]) {
        tags[tag] = { count: 0 };
        tagCount++;
      }
      tags[tag].count++;
    });
  });

  return { tags, tagCount };
};
