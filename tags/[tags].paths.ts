import fs from "fs";
import matter from "gray-matter";

export default {
    paths() {
        let paths = [];
        fs.readdirSync("posts", {withFileTypes: true}).filter((dirent) => {
            return dirent.isDirectory();
        }).map(({ name }) => {
            fs.readdirSync(`posts/${name}`).map((file: string) => {
                const content = fs.readFileSync(`posts/${name}/${file}`, "utf-8");
                const { data } = matter(content);
                for (let tag of data.tags) {
                    paths.push({ params: { tags: tag } });
                }
            });
        });
        return paths;
    },
};