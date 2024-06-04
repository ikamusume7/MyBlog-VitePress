<template>
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
</template>

<script setup>
const { dates } = defineProps(["dates"]);
</script>
