<template>
    <div class="fixed top-4 right-4">
        <ClientOnly>
            <UButton aria-label="button to switch theme dark to light" @click="toggleDark" variant="link" color="white"
                :icon="color.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
            <template #fallback>
                <UButton aria-label="button to switch theme dark to light" @click="toggleDark" variant="link" color="white"
                    icon="i-heroicons-moon" />
            </template>
        </ClientOnly>
    </div>
</template>

<script lang="ts" setup>
 const color = useColorMode();
 function toggleDark() {
     color.preference = color.preference === 'dark' ? 'light' : 'dark';
 }
</script>

<style>

</style>