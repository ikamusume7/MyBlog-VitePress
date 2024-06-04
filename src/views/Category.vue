<template>
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
                <summary>
                  <button @click="$emit('categoryHandler', pKey)">
                    {{ pKey }}
                  </button>
                </summary>
                <ul v-for="(cValue, cKey) in pValue" :key="cKey">
                  <li>
                    <a :href="cValue.url">{{ cValue.title }}</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { categories } = defineProps(["categories"]);
</script>
