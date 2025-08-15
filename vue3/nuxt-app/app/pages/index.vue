<template>
  <div class="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800">
    <!-- 背景装饰 -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-800/20 rounded-full blur-3xl opacity-30"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 dark:bg-blue-800/20 rounded-full blur-3xl opacity-30"></div>
    </div>

    <div class="relative z-20">
      <LazySwitchMode />
      <UContainer class="py-8 md:py-16">
        <div v-motion-fade class="flex flex-col gap-8 items-center justify-center max-w-6xl mx-auto">
          <!-- 头像区域 -->
          <div v-motion-slide-visible-bottom class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <LazyPhotoProfile />
          </div>
          
          <!-- 个人信息区域 -->
          <div v-motion-slide-visible-bottom class="text-center space-y-4">
            <LazyMyInfo />
          </div>
          
          <!-- 社交媒体区域 -->
          <div v-motion-slide-visible-bottom class="py-4">
            <LazySocialNetwork />
          </div>
          
          <!-- 作品展示区域 -->
          <div v-motion-slide-visible-bottom class="w-full max-w-7xl">
            <h3 class="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 text-center">
              精选作品
            </h3>
            <LazyGallery />
          </div>
        </div>
      </UContainer>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
const config = useAppConfig();

// 动态 SEO
useHead({
  title: `${config.data.name} - ${config.data.title}`,
  meta: [
    {
      name: 'description',
      content: config.data.bio
    },
    {
      property: 'og:title',
      content: `${config.data.name} - ${config.data.title}`
    },
    {
      property: 'og:description',
      content: config.data.bio
    },
    {
      property: 'og:image',
      content: config.data.avatar
    }
  ],
  // 添加结构化数据
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: config.data.name,
        jobTitle: config.data.title,
        description: config.data.bio,
        image: config.data.avatar,
        url: config.data.website,
        email: config.data.email,
        telephone: config.data.phone,
        sameAs: [
          config.data.github,
          config.data.facebook,
          config.data.instagram
        ].filter(Boolean),
        worksFor: {
          '@type': 'Organization',
          name: 'PFinalClub'
        }
      })
    }
  ]
})
</script>