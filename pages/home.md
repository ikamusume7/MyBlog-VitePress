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
        <a :href="item.url" class="text-3xl w-max hover:underline hover:underline-offset-4">{{item.title}}</a>
        <div v-html="item.excerpt" class="vp-doc"></div>
        <a :href="item.url" class="text-info  w-max"><button class="btn rounded-btn">查看更多</button></a>
    </div>
</div>
