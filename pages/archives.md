---
title: 时间轴
home: true
---

<script setup>
import { data as posts } from "../src/posts.data";
import { sortPostsByYear } from "../src/utils/postUtil";
const dates = sortPostsByYear(posts);
</script>

<div
v-for="(posts, date) in dates"
:key="date"
class="card bg-base-100 shadow-xl w-auto h-auto mb-2"
>
    <div class="card-body w-auto">
        <div>
          <div class="border-2 rounded-md w-max p-2">{{date}}</div>
        </div>
        <div class="flex flex-col border-l-2 ml-[27px] pt-4 pl-6 mt-[-8px]">
          <div v-for="post in posts" :key="post.id" class="flex flex-row">
            <div class="flex flex-row mt-5">
              <div class="w-3 h-3 rounded-full bg-base-300 dark:bg-white ml-[-31px]"></div>
              <div class="flex flex-col ml-3 mt-[-5px]">
                <span>{{ post.frontmatter.createDate }}</span>
                <a :href="post.url" class="hover:underline">{{ post.frontmatter.title }}</a>
                <span>{{post.frontmatter.category.join("/")}}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
