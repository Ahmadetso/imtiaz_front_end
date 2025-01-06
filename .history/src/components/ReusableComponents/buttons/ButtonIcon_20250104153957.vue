<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button :label="label" iconPos="" class="w-full dark:text-DarkThemeText">
    <template #icon><component :is="icon" class="size-5" /></template>
  </Button>
</template>
<style scoped>
.p-button {
  background-color: #1c1b22;
  border-color: #b1e5f2;
  color: #9999a2;
}
.p-button:hover {
  background-color: #b1e5f2;
}
</style>
