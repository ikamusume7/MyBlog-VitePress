import fs from "fs";

export default {
  paths() {
    return fs
      .readdirSync("posts", { withFileTypes: true })
      .filter((dirent) => {
        return dirent.isDirectory();
      })
      .map(({ name }) => {
        return { params: { category: name } };
      });
  },
};
