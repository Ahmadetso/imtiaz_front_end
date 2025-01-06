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
