<template>
  <div class="flex flex-col h-screen">
    <div class="background w-full h-full fixed top-0 left-0 -z-10" />
    <Header @change-theme="changeTheme" :isDark="isDark" />
    <main class="main w-full grow mt-[110px]">
      <div class="main-container flex flex-row mx-auto justify-center">
        <div class="main-container-col flex flex-col">
          <Introduction
            :postCount="posts.length"
            :categoryCount="categoryCount"
            :tagCount="tagCount"
          />
        </div>

        <div class="main-container-col w-[850px] mx-5">
          <div v-if="page.isNotFound">
            <img
              src="/404 NotFound.webp"
              style="max-width: 50%"
              class="container mx-auto"
            />
          </div>
          <div v-else-if="frontmatter.home">
            <Content />
          </div>
          <div v-else-if="frontmatter.title === undefined">
            <Content />
          </div>
          <div v-else class="card bg-base-100 shadow-md h-auto mb-2">
            <article class="card-body vp-doc">
              <h1 class="text-3xl font-bold">{{ frontmatter.title }}</h1>
              <Content />
              <div :key="title" class="giscus">
                <component
                  :is="'script'"
                  src="https://giscus.app/client.js"
                  data-repo="ikamusume7/MyBlog-VitePress"
                  data-repo-id="R_kgDOMBkF2A"
                  data-category="Announcements"
                  data-category-id="DIC_kwDOMBkF2M4Cf6LZ"
                  data-mapping="pathname"
                  data-strict="0"
                  data-reactions-enabled="1"
                  data-emit-metadata="0"
                  data-input-position="top"
                  data-theme="transparent_dark"
                  data-lang="zh-CN"
                  data-loading="lazy"
                  crossorigin="anonymous"
                  async
                />
              </div>
            </article>
          </div>

          <!-- <Pagination /> -->
        </div>

        <Category
          :categories="categories"
          @category-handler="categoryHandler"
        />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { Content } from "vitepress";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Introduction from "./Introduction.vue";
import Category from "./Category.vue";
import Pagination from "./Pagination.vue";
import { useData, useRouter } from "vitepress";
import { data as posts } from "../posts.data.mjs";
import { onMounted, ref, watch } from "vue";
import {
  sortPostsByCategory,
  sortPostsByDate,
  sortPostsByTag,
} from "../utils/postUtil";

const { page, frontmatter, isDark, title } = useData();

const router = useRouter();

const categoryHandler = (category) => {
  router.go(`posts/${category}`);
};

onMounted(() => {
  document.documentElement.setAttribute(
    "data-theme",
    isDark.value ? "dark" : "light"
  );
});

watch(isDark, (newTheme) => {
  document.documentElement.setAttribute(
    "data-theme",
    newTheme ? "dark" : "light"
  );
});

const changeTheme = () => {
  isDark.value = !isDark.value;
};

// 按照category分类posts
const { categories, categoryCount } = sortPostsByCategory(posts);

// 按照tags分类posts
const { tagCount } = sortPostsByTag(posts);
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
  background: url("/bg.webp") repeat;
}
</style>
