// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // 使用 @nuxt/ui，它已经包含了 Tailwind CSS
  modules: [
    '@nuxt/ui',
    '@vueuse/motion/nuxt'
  ],
  motion: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0
        }
      }
    }},
  // 路由配置
  router: {
    options: {
      strict: false
    }
  },
  
  // 忽略某些路径的警告
  nitro: {
    routeRules: {
      '/sw.js': { headers: { 'cache-control': 'no-cache' } }
    }
  },
  
  css: ['~/assets/css/main.css'],
})