<script setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
defineProps({
  label: String,
  bindWith: String,
})
</script>
<template>
  <FloatLabel variant="on">
    <InputText id="on_label" type="text" v-model="bindWith" />
    <label for="on_label">{{ label }}</label>
  </FloatLabel>
</template>
