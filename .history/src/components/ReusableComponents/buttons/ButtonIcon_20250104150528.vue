<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button :label="label" iconPos="left" class="" :type="type">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>
<style scoped>
.p-button:hover {
  background-color: #1c1b22;
  color: #9999a2;
  border-color: aqua;
}
.p-button:hover {
  background-color: gray;
  color: #9999a2;
}
</style>
