<template>
  <div class="w-full relative h-full pt-12 bg-zinc-50 dark:bg-zinc-950">
    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer>
        <div v-motion-fade class="flex flex-col gap-2 items-center justify-center">
          <LazyPhotoProfile />
          <LazyMyInfo />
          <LazySocialNetwork />
          <LazyGallery />
        </div>
      </UContainer>
    </div>
    <Footer />
  </div>
</template>
<script setup>
const config = useAppConfig();
</script>