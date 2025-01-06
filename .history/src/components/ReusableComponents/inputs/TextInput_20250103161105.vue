<script setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
defineProps({
  label: String,
})
</script>
<template>
  <FloatLabel variant="on">
    <InputText id="on_label" v-model="value3" />
    <label for="on_label">{{ label }}</label>
  </FloatLabel>
</template>
