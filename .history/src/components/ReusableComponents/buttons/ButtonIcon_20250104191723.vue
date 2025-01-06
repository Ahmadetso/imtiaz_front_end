<script setup>
import { Button } from 'primevue'
defineProps({
  icon: Object,
})
</script>
<template>
  <Button aria-label="Filter">
    <template><component :is="icon" /></template>
  </Button>
</template>
