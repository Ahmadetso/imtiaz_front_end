<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button dir="ltr" :label="label" iconPos="" class="">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>
<style scoped>
.p-button {
  background-color: #1c1b22;
  --p-button-primary-hover-background: #1c1b22;

  --p-button-primary-border-color: aqua;
  color: #9999a2;
}
</style>
