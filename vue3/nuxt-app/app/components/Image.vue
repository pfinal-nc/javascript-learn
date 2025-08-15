<template>
  <div class="relative w-full h-full">
    <!-- 图片 -->
    <NuxtImg 
      :src="props.src"
      :placeholder="img(props.src, { h: 20, w: 20, blur: 16, q: 90 })" 
      fit="cover"
      class="w-full h-full object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-300 will-change-transform group-hover:scale-105"
      :alt="props.alt || '作品展示图片'" 
      @click="openPreview" 
      @load="handleImageLoad"
      loading="lazy"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
    />
    
    <!-- 加载骨架屏 -->
    <div v-if="isLoading" class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg"></div>
    
    <!-- 预览模态框 -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div 
          v-if="showPreviewModal" 
          class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center overflow-hidden"
          @click="closeModal"
        >
          <!-- 关闭按钮 -->
          <div class="absolute top-4 right-4 z-10">
            <UButton 
              aria-label="关闭图片预览" 
              variant="link" 
              icon="i-heroicons-x-mark-20-solid" 
              class="text-white hover:text-gray-300 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-200" 
              @click.stop="closeModal" 
            />
          </div>
          
          <!-- 图片容器 -->
          <div 
            class="relative w-full h-full flex items-center justify-center p-4" 
            @click.stop
            @wheel="handleWheel"
          >
            <NuxtImg 
              :src="props.src"
              :placeholder="img(props.src, { h: 20, w: 20, blur: 16, q: 90 })" 
              fit="contain"
              :class="[
                'object-contain rounded-lg shadow-2xl cursor-zoom-in transition-all duration-300',
                isZoomed ? 'scale-150' : 'max-w-full max-h-full hover:scale-105'
              ]"
              :alt="props.alt || '作品展示图片'" 
              loading="eager"
              sizes="100vw"
              @click="toggleZoom"
            />
            
            <!-- 图片信息 -->
            <div class="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
              <p class="text-white text-sm font-medium">
                {{ props.alt || '作品展示图片' }}
              </p>
              <p class="text-white/70 text-xs mt-1">
                {{ isZoomed ? '点击图片缩小' : '点击图片放大' }}，ESC 键关闭
              </p>
            </div>
          </div>
          
          <!-- 导航按钮 -->
          <div class="absolute left-4 top-1/2 transform -translate-y-1/2">
            <UButton 
              aria-label="上一张图片" 
              variant="link" 
              icon="i-heroicons-chevron-left-20-solid" 
              class="text-white hover:text-gray-300 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-200" 
              @click.stop="previousImage" 
            />
          </div>
          
          <div class="absolute right-4 top-1/2 transform -translate-y-1/2">
            <UButton 
              aria-label="下一张图片" 
              variant="link" 
              icon="i-heroicons-chevron-right-20-solid" 
              class="text-white hover:text-gray-300 ring-1 ring-white/20 hover:ring-white/40 transition-all duration-200" 
              @click.stop="nextImage" 
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
const showPreviewModal = ref(false)
const isLoading = ref(true)
const isZoomed = ref(false)
const img = useImage()

const props = defineProps<{
    src: string
    alt?: string
}>()

// 打开预览
const openPreview = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
  showPreviewModal.value = true
  isZoomed.value = false
}

// 关闭模态框
const closeModal = () => {
  showPreviewModal.value = false
  isZoomed.value = false
}

// 切换缩放
const toggleZoom = () => {
  isZoomed.value = !isZoomed.value
}

// 处理滚轮缩放
const handleWheel = (event: WheelEvent) => {
  event.preventDefault()
  if (event.deltaY < 0) {
    // 向上滚动，放大
    isZoomed.value = true
  } else {
    // 向下滚动，缩小
    isZoomed.value = false
  }
}

// 上一张图片
const previousImage = () => {
  // 这里可以添加图片切换逻辑
  console.log('上一张图片')
}

// 下一张图片
const nextImage = () => {
  // 这里可以添加图片切换逻辑
  console.log('下一张图片')
}

// ESC键关闭预览
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && showPreviewModal.value) {
    showPreviewModal.value = false
    isZoomed.value = false
  }
}

// 图片加载完成
const handleImageLoad = () => {
  isLoading.value = false
}

// 监听键盘事件
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
/* 确保图片可以点击 */
img {
  cursor: pointer;
  pointer-events: auto;
}

/* 预览模态框样式 */
.fixed {
  cursor: pointer;
}

.fixed > * {
  cursor: default;
}

/* 添加图片加载动画 */
.group:hover img {
  filter: brightness(1.1);
}

/* 模态框背景动画 */
.backdrop-blur-sm {
  animation: backdropBlur 0.3s ease-out;
}

@keyframes backdropBlur {
  from {
    backdrop-filter: blur(0px);
  }
  to {
    backdrop-filter: blur(4px);
  }
}

/* 缩放效果 */
.cursor-zoom-in:hover {
  transform: scale(1.05);
}

/* 全屏预览时的图片样式 */
.fixed img {
  max-width: 95vw;
  max-height: 95vh;
  object-fit: contain;
}

/* 缩放时的图片样式 */
.scale-150 {
  transform: scale(1.5);
  cursor: zoom-out;
}
</style>