<script setup>
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'

defineProps({
  title: String,
})
</script>
<template>
  <div class="">
    <div class="relative size-full max-w-sm">
      <FloatLabel>
        <DatePicker
          v-model="value1"
          inputId="over_label"
          showIcon
          iconDisplay="input"
        />
        <label for="over_label">{{ title }}</label>
      </FloatLabel>
    </div>
  </div>
</template>
