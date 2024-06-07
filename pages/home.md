---
title: 首页
home: true
---

<script setup>
import { data as posts } from "../src/posts.data";
</script>

<div
v-for="item in posts"
:key="item.title"
class="card bg-base-100 shadow-xl w-auto h-auto mb-2"
>
    <div class="card-body w-auto">
        <a :href="item.url" class="text-3xl font-bold w-max hover:underline hover:underline-offset-4">{{item.frontmatter.title}}</a>
        <div v-html="item.excerpt" class="vp-doc"></div>
        <a :href="item.url" class="btn rounded-btn text-info w-max dark:btn-neutral">查看更多</a>
    </div>
</div>
