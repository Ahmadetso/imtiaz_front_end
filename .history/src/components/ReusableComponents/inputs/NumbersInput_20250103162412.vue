<script setup>
import InputNumber from 'primevue/inputnumber'

defineProps({
  placeholder: String,
})
</script>
<template>
< variant="on">
  <InputNumber v-model="value1" inputId="integeronly" fluid />
  <label for="on_label">On Label</label>
</FloatLabel>
</template>
