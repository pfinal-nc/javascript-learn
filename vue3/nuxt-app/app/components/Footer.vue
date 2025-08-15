<template>
  <footer class="relative mt-16 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
    <UContainer>
      <div class="flex flex-col md:flex-row items-center justify-between py-8 md:py-12 space-y-4 md:space-y-0">
        <!-- 联系信息 -->
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <NuxtLink 
            :to="`mailto:${email}`"
            class="group flex items-center gap-2 text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            <UIcon name="i-heroicons-envelope" class="w-4 h-4" />
            <span class="font-medium">{{ email }}</span>
            <div class="w-0 group-hover:w-full h-0.5 bg-emerald-500 transition-all duration-300"></div>
          </NuxtLink>
          
          <NuxtLink 
            :to="`tel:${phone}`"
            class="group flex items-center gap-2 text-sm text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors duration-200"
          >
            <UIcon name="i-heroicons-phone" class="w-4 h-4" />
            <span class="font-medium">{{ phone }}</span>
            <div class="w-0 group-hover:w-full h-0.5 bg-emerald-500 transition-all duration-300"></div>
          </NuxtLink>
        </div>
        
        <!-- 版权信息 -->
        <div class="text-center md:text-right">
          <p class="text-sm text-zinc-500 dark:text-zinc-500">
            © {{ new Date().getFullYear() }} 
            <span class="font-semibold text-emerald-600 dark:text-emerald-400">PFinalClub</span>. 
            保留所有权利
          </p>
          <!-- <p class="text-xs text-zinc-400 dark:text-zinc-600 mt-1">
            由 Nuxt 3 + Vue 3 构建
          </p> -->
        </div>
      </div>
    </UContainer>
    
    <!-- 装饰元素 -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
  </footer>
</template>

<script setup>
const app = useAppConfig();
const { email, phone } = app.data;
</script>

<style scoped>
/* 添加悬停动画 */
.group:hover .w-0 {
  width: 100%;
}

/* 页脚背景动画 */
footer {
  background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 100%);
}

.dark footer {
  background: linear-gradient(135deg, rgba(24,24,27,0.5) 0%, rgba(24,24,27,0.3) 100%);
}
</style>