<template>
  <div class="relative group">
    <!-- 外圈装饰 -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
    
    <!-- 头像容器 -->
    <div class="relative">
      <UAvatar 
        size="3xl" 
        :alt="`${name} 的头像照片`" 
        height="400" 
        width="400" 
        :src="avatar" 
        class="ring-4 ring-white dark:ring-zinc-800 shadow-2xl group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const app = useAppConfig();
const { avatar, name } = app.data;
</script>