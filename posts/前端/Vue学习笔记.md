---
collection: post
title: Vue学习笔记
author:
  name: 伊卡
category:
  - 前端
tags:
  - Vue
---

## Single-File Components

简写`SFC`，中文`单文件组件`，将 js、html、css 封装在了同一个文件里。

一般的格式：

```vue
<template></template>

<script setup></script>

<style scoped></style>
```

---

## 数据绑定

### 双大括号

将计算式或变量插入到 html 中

例子：
::: demo

```vue
<template>
  <p>{{ 1 + 2 }}</p>
</template>
```

:::

### v-bind

简写`@`，
