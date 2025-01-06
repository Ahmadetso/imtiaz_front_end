<script setup>
import { Button } from 'primevue'
defineProps({
  icon: Object,
})
</script>
<template>
  <Button aria-label="Filter">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>

<style scoped></style>
