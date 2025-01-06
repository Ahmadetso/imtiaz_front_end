<script setup>
import { Button } from 'primevue'
defineProps({
  icon: Object,
})
</script>
<template>
  <Button aria-label="Filter" :style="b">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>

<style scoped>
.p-button {
  border-radius: 0px;
}
</style>
