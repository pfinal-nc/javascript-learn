<template>
  <header class="text-gray-600 body-font bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-white/20 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Tailblocks</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <ULink v-for="(link, i) in links" :key="i" :to="link.href" class="text-white hover:text-gray-200 flex items-center justify-center p-3 hover:drop-shadow-lg drop-shadow-none rounded-full">
          <Icon :name="link.icon" class="w-6 h-6 mr-2" />
          {{ link.label }}
        </ULink>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
const config = useAppConfig()
const { links } = config.data
</script>

<style>

</style>