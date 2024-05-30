<template>
  <div class="background w-full h-full fixed top-0 left-0 -z-10" />
  <Header />
  <div class="main w-full">
    <div class="main-container flex flex-row mx-auto mt-8 justify-center">
      <div class="main-container-col flex flex-col">
        <Introduction />
        <section class="mt-5">
          <div class="card bg-base-100 shadow-md w-[350px] h-auto">
            <div class="card-body">
              <h1 class="card-title">归档</h1>
              <ul class="menu w-full rounded-box">
                <li><a>Item 1</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                      <li>
                        <details open>
                          <summary>Parent</summary>
                          <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div class="main-container-col flex flex-col">
        <!-- 此处将渲染 markdown 内容 -->
        <div v-if="page.isNotFound" class="w-[950px] mx-5">
          <img
            src="/404 NotFound.webp"
            style="max-width: 50%"
            class="container mx-auto"
          />
        </div>
        <section v-else-if="frontmatter.index" class="flex flex-col">
          <div
            v-for="item in posts"
            :key="item.title"
            class="card bg-base-100 shadow-md w-[950px] h-[200px] mx-5 mb-2"
          >
            <div class="card-body">
              <h1 class="card-title">{{ item.title }}</h1>
              <p class="text-base-content">文章内容</p>
              <a :href="item.url" class="text-info">查看更多</a>
            </div>
          </div>
          <Pagination />
        </section>
        <div
          v-else
          class="card bg-base-100 shadow-md w-[950px] h-auto mx-5 mb-2"
        >
          <article class="card-body vp-doc">
            <Content />
          </article>
        </div>
      </div>

      <div class="main-container-col flex flex-col">
        <section class="flex flex-col">
          <div class="card bg-base-100 shadow-md w-[350px] h-auto">
            <div class="card-body">
              <h1 class="card-title">文章分类</h1>
              <ul class="menu w-full rounded-box">
                <li><a>Item 1</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                      <li>
                        <details open>
                          <summary>Parent</summary>
                          <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li><a>Item 3</a></li>
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

const { page, frontmatter } = useData();
console.log(posts);
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
