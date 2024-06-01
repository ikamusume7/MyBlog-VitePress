<template>
  <div class="background w-full h-full fixed top-0 left-0 -z-10" />
  <Header @change-theme="changeTheme" :isDark="isDark" />
  <div class="main w-full">
    <div class="main-container flex flex-row mx-auto mt-8 justify-center">
      <div class="main-container-col flex flex-col">
        <Introduction
          :postCount="posts.length"
          :categoryCount="categoryCount"
          :tagCount="tagCount"
        />
        <section class="mt-5">
          <div class="card bg-base-100 shadow-md w-[350px] h-auto">
            <div class="card-body">
              <h1 class="menu-title">归档</h1>
              <ul
                v-for="(pValue, pKey) in dates"
                :key="pKey"
                class="menu w-full rounded-box"
              >
                <li>
                  <a>
                    <span class="justify-start">{{ pKey }}</span>
                    <span class="badge justify-end">{{ pValue.length }}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div class="main-container-col">
        <!-- 此处将渲染 markdown 内容 -->
        <div v-if="page.isNotFound" class="w-[950px] mx-5">
          <img
            src="/404 NotFound.webp"
            style="max-width: 50%"
            class="container mx-auto"
          />
        </div>
        <div v-else-if="frontmatter.home">
          <Content />
        </div>
        <div
          v-else
          class="card bg-base-100 shadow-md w-[950px] h-auto mx-5 mb-2"
        >
          <article class="card-body vp-doc">
            <Content />
          </article>
        </div>

        <!-- <Pagination /> -->
      </div>

      <div class="main-container-col flex flex-col">
        <section class="flex flex-col">
          <div class="card bg-base-100 shadow-md w-[350px] h-auto">
            <div class="card-body">
              <h1 class="menu-title">分类</h1>
              <ul
                v-for="(pValue, pKey) in categories"
                :key="pKey"
                class="menu w-full rounded-box"
              >
                <li>
                  <details>
                    <summary>{{ pKey }}</summary>
                    <ul v-for="(cValue, cKey) in pValue" :key="cKey">
                      <li>
                        <a>{{ cValue.title }}</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { Content } from "vitepress";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Introduction from "./Introduction.vue";
import Pagination from "./Pagination.vue";
import { useData } from "vitepress";
import { data as posts } from "../posts.data.ts";
import { onMounted, watch } from "vue";
import {
  sortPostsByCategory,
  sortPostsByDate,
  sortPostsByTag,
} from "../utils/postUtil.ts";

const { page, frontmatter, isDark } = useData();

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

// 按照createDate里的年加月（去掉日）分类统计posts 例 2024-5-31 => 2024-5
const dates = sortPostsByDate(posts);

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
