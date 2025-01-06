<script setup>
import { Button } from 'primevue'
defineProps({
  icon: Object,
})
</script>
<template>
  <Button :icon="icon" aria-label="Filter" />
</template>
