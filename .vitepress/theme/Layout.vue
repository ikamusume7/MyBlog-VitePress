<template>
  <div class="background w-full h-full fixed top-0 left-0 -z-10" />
  <Header />
  <div class="main w-full">
    <div class="main-container flex flex-row mx-auto mt-8 justify-center">
      <div class="main-container-col flex flex-col">
        <Introduction />
        <section class="mt-5">
          <div class="card bg-base-100 shadow-md w-[350px] h-[600px]">
            <div class="card-body">
              <h1 class="card-title">归档</h1>
            </div>
          </div>
        </section>
      </div>
      <div class="main-container-col flex flex-col">
        <section class="flex flex-col">
          <div
            v-for="item in posts"
            :key="item"
            class="card bg-base-100 shadow-md w-[950px] h-[200px] mx-5 mb-2"
          >
            <div class="card-body">
              <h1 class="card-title">文章预览</h1>
              <p class="text-base-content">文章内容</p>
              <a href="/archives" class="text-info">查看更多</a>
            </div>
          </div>
          <Pagination />
        </section>
      </div>
      <div class="main-container-col flex flex-col">
        <section class="flex flex-col">
          <div class="card bg-base-100 shadow-md w-[350px] h-[600px]">
            <div class="card-body">
              <h1 class="card-title">文章分类</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <!-- 此处将渲染 markdown 内容 -->
  <!-- <div v-if="page.isNotFound">
    <img
      src="./404 NotFound.webp"
      style="max-width: 50%"
      class="container mx-auto"
    />
  </div>
  <Content v-else /> -->
  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Introduction from "./Introduction.vue";
import Pagination from "./Pagination.vue";
import { ref } from "vue";
import { useData } from "vitepress";

const posts = ref([1, 2, 3, 4, 5]);
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
