<script setup>
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

// Define props including modelValue for v-model support
const props = defineProps({
  label: String,
  modelValue: String, // This replaces the previous bindWith prop
})

// Define emits for v-model support
const emit = defineEmits(['update:modelValue'])

// Create a computed property for two-way binding
import { computed } from 'vue'
const inputValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})
</script>

<template>
  <FloatLabel variant="on">
    <InputText id="on_label" type="text" v-model="inputValue" />
    <label for="on_label">{{ label }}</label>
  </FloatLabel>
</template>
