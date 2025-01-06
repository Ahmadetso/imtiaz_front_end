<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button
    dir="ltr"
    :label="label"
    iconPos=""
    :style="{
      backgroundColor: '#1c1b22',
      color: '#9999a2',
      borderColor: '#b1e5f2',
    }"
    class="hover:bg-red-800"
  >
    <template #icon><component :is="icon" /></template>
  </Button>
</template>
<style scoped>
.custom-button {
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease; /* Optional for smooth transition */
}

.custom-button:hover {
  background-color: #45a049; /* Darker shade of green for hover */
  color: #ffffff; /* White text on hover (optional) */
}
</style>
