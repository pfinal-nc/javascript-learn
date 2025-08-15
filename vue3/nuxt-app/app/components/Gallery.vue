<template>
  <div class="w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 auto-rows-fr">
      <template v-for="(image, index) in images" :key="index">
        <div 
          class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full"
          :class="{
            'lg:col-span-2 lg:row-span-2 xl:col-span-2 xl:row-span-2': index === 1,
            'lg:col-span-2 xl:col-span-1': index === 4,
            'lg:col-span-1 xl:col-span-1': ![1, 4].includes(index)
          }"
        >
          <!-- 图片容器 -->
          <div class="relative w-full h-full aspect-square overflow-hidden">
            <Image 
              :src="image" 
              :alt="`作品展示 ${index + 1}`"
            />
            
            <!-- 悬停遮罩 -->
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <UIcon 
                  name="i-heroicons-eye" 
                  class="text-white text-2xl" 
                />
              </div>
            </div>
          </div>
          
          <!-- 图片信息 -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
            <p class="text-white text-sm font-medium">
              {{ getImageTitle(index) }}
            </p>
            <p class="text-white/70 text-xs mt-1">
              {{ getImageDescription(index) }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const app = useAppConfig();
const { images } = app.data;

// 获取图片标题
const getImageTitle = (index: number) => {
  const titles = [
    '前端开发',
    '数据分析',
    '代码编程',
    '移动开发',
    '技术会议',
    'UI/UX 设计',
    '代码开发',
    '团队协作',
    '代码编程',
    '项目管理',
    '团队讨论',
    '项目规划'
  ];
  return titles[index] || `作品 ${index + 1}`;
};

// 获取图片描述
const getImageDescription = (index: number) => {
  const descriptions = [
    '现代化 Web 应用开发',
    '数据可视化与分析',
    '高效代码编写',
    '移动端应用开发',
    '技术交流与分享',
    '用户体验设计',
    '全栈开发实践',
    '团队协作开发',
    '代码质量优化',
    '敏捷项目管理',
    '技术方案讨论',
    '项目需求分析'
  ];
  return descriptions[index] || '专业开发服务';
};
</script>

<style scoped>
/* 添加图片加载动画 */
.group {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 为不同图片添加不同的动画延迟 */
.group:nth-child(1) { animation-delay: 0.1s; }
.group:nth-child(2) { animation-delay: 0.2s; }
.group:nth-child(3) { animation-delay: 0.3s; }
.group:nth-child(4) { animation-delay: 0.4s; }
.group:nth-child(5) { animation-delay: 0.5s; }
.group:nth-child(6) { animation-delay: 0.6s; }
.group:nth-child(7) { animation-delay: 0.7s; }
.group:nth-child(8) { animation-delay: 0.8s; }
.group:nth-child(9) { animation-delay: 0.9s; }
.group:nth-child(10) { animation-delay: 1.0s; }
.group:nth-child(11) { animation-delay: 1.1s; }
.group:nth-child(12) { animation-delay: 1.2s; }

/* 确保网格行高度一致 */
.auto-rows-fr {
  grid-auto-rows: 1fr;
}

/* 确保所有图片容器高度一致 */
.group {
  height: 100%;
  min-height: 0;
}

.aspect-square {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
}

/* 特殊布局样式 */
.lg\:row-span-2 {
  grid-row: span 2 / span 2;
}

.xl\:row-span-2 {
  grid-row: span 2 / span 2;
}
</style>