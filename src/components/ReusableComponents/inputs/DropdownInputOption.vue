<script setup>
defineProps({
  name: String,
  value: String,
})
</script>
<template>
  <option value="US">{{ name }}</option>
</template>
