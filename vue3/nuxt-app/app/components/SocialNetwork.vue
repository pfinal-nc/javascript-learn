<template>
  <div class="flex flex-col items-center space-y-4">
    <h3 class="text-lg font-medium text-zinc-700 dark:text-zinc-300">
      关注我
    </h3>
    
    <div class="flex items-center gap-6">
      <NuxtLink 
        :to="instagram" 
        target="_blank" 
        aria-label="Instagram" 
        v-if="instagram"
        class="group relative p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <UIcon 
          name="i-simple-icons-instagram" 
          scale="1.5" 
          class="text-white" 
          dynamic 
        />
        <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Instagram
        </span>
      </NuxtLink>
      
      <NuxtLink 
        :to="x" 
        target="_blank" 
        aria-label="X (Twitter)" 
        v-if="x"
        class="group relative p-3 rounded-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <UIcon 
          name="i-simple-icons-x" 
          scale="1.5" 
          class="text-white" 
          dynamic 
        />
        <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          X (Twitter)
        </span>
      </NuxtLink>
      
      <NuxtLink 
        :to="facebook" 
        target="_blank" 
        aria-label="Facebook" 
        v-if="facebook"
        class="group relative p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <UIcon 
          name="i-simple-icons-facebook" 
          scale="1.5" 
          class="text-white" 
          dynamic 
        />
        <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Facebook
        </span>
      </NuxtLink>
      
      <NuxtLink 
        :to="github" 
        target="_blank" 
        aria-label="GitHub" 
        v-if="github"
        class="group relative p-3 rounded-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <UIcon 
          name="i-simple-icons-github" 
          scale="1.5" 
          class="text-white" 
          dynamic 
        />
        <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          GitHub
        </span>
      </NuxtLink>
      
      <NuxtLink 
        :to="website" 
        target="_blank" 
        aria-label="个人网站" 
        v-if="website"
        class="group relative p-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      >
        <UIcon 
          name="i-heroicons-globe-alt" 
          scale="1.5" 
          class="text-white" 
          dynamic 
        />
        <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-600 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-sans">
          个人网站
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const app = useAppConfig();
const { instagram, x, facebook, github, website } = app.data;
</script>

<style scoped>
/* 添加悬停时的光晕效果 */
.group:hover::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  border-radius: inherit;
  z-index: -1;
}

/* 确保中文字体显示正确 */
.font-sans {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>