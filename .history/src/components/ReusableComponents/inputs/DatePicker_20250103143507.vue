<script setup>
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'

defineProps({
  title: String,
})
</script>
<template>
  <div class="w-full flex items-center">
    <FloatLabel variant="on">
      <DatePicker
        v-model="value3"
        inputId="on_label"
        showIcon
        iconDisplay="input"
      />
      <label for="on_label">{{ title }}</label>
    </FloatLabel>
  </div>
</template>
