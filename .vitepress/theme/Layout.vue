<template>
  <div class="background w-full h-full fixed top-0 left-0 -z-10" />
  <div class="navbar bg-base-100/70 backdrop-blur drop-shadow-md z-50">
    <div class="navbar-container flex flex-col md:flex-row mx-auto">
      <div class="navbar-brand">
        <a class="btn btn-ghost text-xl font-medium">IKA'S BLOG</a>
      </div>
      <div
        class="navbar-menu flex flex-col md:flex-row md:w-[432px] lg:w-[688px] xl:w-[994px] 2xl:w-[1200px]"
      >
        <div
          class="md:w-2/3 flex shrink justify-center md:justify-start items-center"
        >
          <div>
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/"
              >首页</a
            >
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/archives"
              >时间轴</a
            >
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/categories"
              >分类</a
            >
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/tags"
              >标签</a
            >
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/links"
              >友链</a
            >
            <a
              class="btn btn-ghost text-md px-0 lg:px-2 ml-2 font-medium"
              href="/about"
              >关于</a
            >
          </div>
        </div>
        <div
          class="md:w-1/3 flex shrink justify-center md:justify-end items-center"
        >
          <div class="avatar placeholder">
            <div class="bg-neutral text-neutral-content rounded-full w-8 h-8">
              <span class="text-xs">UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

<style>
body {
  opacity: 1;
}
:root {
  --vp-c-bg: #ffffff00;
}
.background {
  opacity: 0.3;
  background: url("./bg.webp") repeat;
}
</style>
