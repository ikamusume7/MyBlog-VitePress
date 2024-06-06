---
title: 分类
home: true
---

<script setup>
import { data as posts } from "../src/posts.data.ts";
import { sortPostsByCategory } from "../src/utils/postUtil.ts";
const { categories, categoryCount } = sortPostsByCategory(posts);
</script>

<div class="card bg-base-100 shadow-md w-auto h-auto mb-2">
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
                <a>{{ cValue.frontmatter.title }}</a>
                </li>
            </ul>
            </details>
        </li>
        </ul>
    </div>
</div>
