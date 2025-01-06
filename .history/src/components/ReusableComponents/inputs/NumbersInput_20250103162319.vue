<script setup>
import InputNumber from 'primevue/inputnumber'

defineProps({
  placeholder: String,
})
</script>
<template>
  <InputNumber v-model="value1" inputId="integeronly" fluid />
</template>
