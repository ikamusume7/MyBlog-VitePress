---
title: 标签
home: true
---

<script setup>
import { data as posts } from "../src/posts.data.ts";
import { sortPostsByTag } from "../src/utils/postUtil.ts";
const { tags } = sortPostsByTag(posts);
</script>

<div
class="card bg-base-100 shadow-md w-[950px] h-auto mx-5 mb-2"
>
    <div class="card-body w-[950px] flex flex-row">
        <button v-for="(tag, tagName) in tags" class="btn btn-neutral">
            {{ tagName }}
            <div class="badge">{{ tag.count }}</div>
        </button>
    </div>
</div>
