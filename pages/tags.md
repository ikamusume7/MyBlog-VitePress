---
title: 标签
home: true
---

<script setup>
import { useRouter } from "vitepress";
import { data as posts } from "../src/posts.data";
import { sortPostsByTag } from "../src/utils/postUtil";
const { tags } = sortPostsByTag(posts);
const router = useRouter();
const tagHandler = (tag) => {
  router.go(`tags/${tag}`);
};
</script>

<div class="card bg-base-100 shadow-xl w-auto h-auto mb-2">
    <div class="card-body w-auto flex flex-row">
        <button @click="tagHandler(tagName)" v-for="(tag, tagName) in tags" class="btn dark:btn-neutral">
            {{ tagName }}
            <div class="badge">{{ tag.count }}</div>
        </button>
    </div>
</div>
