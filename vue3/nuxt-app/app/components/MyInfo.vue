<template>
  <div class="flex flex-col items-center justify-center space-y-6">
    <div class="text-center space-y-3">
      <h1 class="font-sans font-bold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-zinc-900 via-emerald-600 to-blue-600 dark:from-zinc-50 dark:via-emerald-400 dark:to-blue-400 bg-clip-text text-transparent">
        {{ name }}
      </h1>
      <h2 class="font-sans font-medium text-xl md:text-2xl text-zinc-700 dark:text-zinc-300">
        {{ title }}
      </h2>
    </div>
    
    <div class="max-w-2xl">
      <p class="font-sans font-light text-center text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {{ bio }}
      </p>
    </div>
    
    <!-- 技能标签 -->
    <div class="flex flex-wrap justify-center gap-2 mt-4">
      <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full font-medium">
        Vue.js
      </span>
      <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium">
        Nuxt.js
      </span>
      <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium">
        TypeScript
      </span>
      <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full font-medium">
        Tailwind CSS
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const app = useAppConfig();
const { title, name, bio } = app.data;
</script>

<style scoped>
.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>