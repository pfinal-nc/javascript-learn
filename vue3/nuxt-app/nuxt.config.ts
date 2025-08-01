// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-16',
  // 添加路由规则
  routeRules:{
    '/sw.js':{
      static: true,
      headers: {
        'Service-Worker-Allowed': '/'
      }
    }
  }
})
