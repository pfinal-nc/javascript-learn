<template>
  <NuxtImg 
    :src="props.src"
    :placeholder="img(props.src, { h: 20, w: 20, blur: 16, q: 90 })" 
    fit="cover"
    class="size-60 object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-150 will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2"
    :alt="props.alt || 'image-work'" 
    @click="showPreviewModal = true" 
    loading="lazy" 
  />
  <Teleport to="body">
    <div v-if="showPreviewModal" v-motion-slide-visible-left class="fixed inset-0 z-[9999] bg-black flex items-center justify-center" style="height: 100vh; width: 100vw;">
      <div class="absolute top-4 right-4 z-10">
        <UButton 
          aria-label="button to close full preview" 
          variant="link" 
          icon="i-heroicons-x-mark-20-solid" 
          class="text-white hover:text-gray-300 ring-1 ring-white/20 hover:ring-white/40" 
          @click="showPreviewModal = false" 
        />
      </div>
      <NuxtImg 
        :src="props.src"
        :placeholder="img(`/unsplash/photo-${props.src}`, { h: 20, w: 20, blur: 16, q: 90 })" 
        fit="cover"
        class="w-full h-full object-center object-cover" 
        style="height: 100vh; width: 100vw;"
        :alt="props.alt || 'image-work'" 
        loading="lazy" 
      />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
const showPreviewModal = ref(false)
const img = useImage()

const props = defineProps<{
    src: string
    alt?: string
}>()

// ESC键关闭预览
const handleKeydown = (event: KeyboardEvent) => {
  console.log(event.key)
  if (event.key === 'Escape' && showPreviewModal.value) {
    showPreviewModal.value = false
  }
}

// 监听键盘事件
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style>

</style>