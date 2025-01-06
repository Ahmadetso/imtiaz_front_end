<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button dir="ltr" :label="label" iconPos="" class="hover:bg-red-800">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>
<style scoped></style>
