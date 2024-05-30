<template>
  <div class="pagination join justify-center">
    <button class="join-item btn" @click="paginationhandler(-1)">上一页</button>
    <div class="justify-center">
      <button class="join-item btn btn-active" @click="paginationhandler(1)">
        1
      </button>
      <button class="join-item btn" @click="paginationhandler(2)">2</button>
      <button class="join-item btn" @click="paginationhandler(3)">3</button>
      <span class="join-item mx-3 text-gray-500/80" style="user-select: none">
        ...
      </span>
      <button class="join-item btn" @click="paginationhandler(99)">99</button>
    </div>
    <button class="join-item btn" @click="paginationhandler(+1)">下一页</button>
  </div>
</template>

<script setup>
const paginationhandler = (index) => {
  console.log(index);
  console.log(top);
  // top.scrollIntoView({ behavior: "smooth", block: "start" });
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
