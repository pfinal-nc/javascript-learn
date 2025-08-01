<template>
  <div class="flex items-center gap-4">
    <NuxtLink :to="instagram" target="_blank"  aria-label="Instagram" v-if="instagram">
      <UIcon name="i-simple-icons-instagram" scale="1.5"  class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950" dynamic />
    </NuxtLink>
    <NuxtLink :to="x" target="_blank"  aria-label="X" v-if="x">
      <UIcon name="i-simple-icons-x" scale="1.5"  class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950" dynamic />
    </NuxtLink>
    <NuxtLink :to="facebook" target="_blank"  aria-label="Facebook" v-if="facebook">
      <UIcon name="i-simple-icons-facebook" scale="1.5"  class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950" dynamic />
    </NuxtLink>
    <NuxtLink :to="github" target="_blank"  aria-label="Github" v-if="github">
      <UIcon name="i-simple-icons-github" scale="1.5"  class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950" dynamic />
    </NuxtLink>
    <NuxtLink :to="website" target="_blank"  aria-label="Website" v-if="website">
      <UIcon name="i-carbon-link" scale="1.5"  class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950" dynamic />
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const app = useAppConfig();
const { instagram, x, facebook, github, website } = app.data;
</script>

<style>
</style>