<script setup>
import { Button } from 'primevue'
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button :label="label" :icon="icon" iconPos="bottom" class="" type="submit" />
</template>
<style scoped>
.p-button {
  background-color: #1c1b22;
}
</style>
