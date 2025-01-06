<script setup>
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <Button :label="label" :icon="icon" iconPos="bottom" class="" />
</template>
