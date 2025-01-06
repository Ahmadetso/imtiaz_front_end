<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button :label="label" iconPos="side" class="" type="submit">
    <template #icon><component :is="icon" /></template>
  </Button>
</template>
<style scoped>
.p-button {
  background-color: #1c1b22;
  color: #9999a2;
}
</style>
