<template>
  <div class="navbar bg-base-100 drop-shadow-md">
    <a class="btn btn-ghost text-xl ml-[260px]">IKA'S BLOG</a>
    <a class="btn btn-ghost text-md ml-2" href="/">首页</a>
    <a class="btn btn-ghost text-md ml-2" href="/archives">时间轴</a>
    <a class="btn btn-ghost text-md ml-2" href="/categories">分类</a>
    <a class="btn btn-ghost text-md ml-2" href="/tags">标签</a>
    <a class="btn btn-ghost text-md ml-2" href="/links">友链</a>
    <a class="btn btn-ghost text-md ml-2" href="/about">关于</a>
  </div>
  <!-- 此处将渲染 markdown 内容 -->
  <div v-if="page.isNotFound">
    <img
      src="./404 NotFound.webp"
      style="max-width: 50%"
      class="container mx-auto"
    />
  </div>
  <Content v-else />
</template>

<script setup>
import { useData } from "vitepress";
const { page } = useData();
</script>
