<template>
  <UAvatar size="3xl" alt="avatar photo" height="400" width="400" :src="avatar" />
</template>

<script lang="ts" setup>
  const app = useAppConfig();
  const { avatar } = app.data;
</script>