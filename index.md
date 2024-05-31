---
title: 首页
home: true
---

<script setup>
import { data as posts } from "./src/posts.data.ts";
console.log(posts);
</script>

<div
v-for="item in posts"
:key="item.title"
class="card bg-base-100 shadow-md w-[950px] h-auto mx-5 mb-2"
>
    <div class="card-body w-[950px]">
        <div class="prose"><h2>{{item.title}}</h2></div>
        <div v-html="item.excerpt" class="vp-doc"></div>
        <a :href="item.url" class="text-info">查看更多</a>
    </div>
</div>
