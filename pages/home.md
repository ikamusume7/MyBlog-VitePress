---
title: 首页
home: true
---

<script setup>
import { data as posts } from "../src/posts.data.ts";
</script>

<div
v-for="item in posts"
:key="item.title"
class="card bg-base-100 shadow-md w-[950px] h-auto mx-5 mb-2"
>
    <div class="card-body w-[950px]">
        <a :href="item.url" class="text-3xl font-bold w-max hover:underline hover:underline-offset-4">{{item.title}}</a>
        <div v-html="item.excerpt" class="vp-doc"></div>
        <a :href="item.url" class="btn rounded-btn text-info w-max dark:btn-neutral">查看更多</a>
    </div>
</div>
