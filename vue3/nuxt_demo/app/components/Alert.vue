<template>
  <UButton @click="toggle = true">SHOW</UButton>

  <div v-motion-fade v-if="toggle" role="alert" class="rounded-md border border-gray-300 bg-white p-4 shadow-sm mt-12">
    <div class="flex items-start gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-green-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <div class="flex-1">
        <strong class="font-medium text-gray-900"> Changes saved </strong>

        <p class="mt-0.5 text-sm text-gray-700">Your product changes have been saved.</p>
      </div>

      <button
        class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
        type="button"
        aria-label="Dismiss alert"
        @click="toggle = !toggle">
        <span class="sr-only">Dismiss popup</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>

  <div v-if="toggle" v-motion-roll-bottom role="alert" class="rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800 mt-12">
    <div class="flex items-start gap-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6 text-green-600"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <div class="flex-1">
        <strong class="font-medium text-gray-900 dark:text-white"> Changes saved </strong>

        <p class="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
          Your product changes have been saved.
        </p>
      </div>

      <button
        class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
        type="button"
        aria-label="Dismiss alert"
        @click="toggle = !toggle"
      >
        <span class="sr-only">Dismiss popup</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const toggle = ref(true);
</script>

<style>

</style>