<template>
  <ThemeSwitcher />
  <div class="card flex flex-wrap justify-center items-end gap-4">
    <FloatLabel>
      <DatePicker
        v-model="value1"
        inputId="over_label"
        showIcon
        iconDisplay="input"
      />
      <label for="over_label">Over Label</label>
    </FloatLabel>

    <FloatLabel variant="in">
      <DatePicker
        v-model="value2"
        inputId="in_label"
        showIcon
        iconDisplay="input"
        variant="filled"
      />
      <label for="in_label">In Label</label>
    </FloatLabel>

    <FloatLabel variant="on">
      <DatePicker
        v-model="value3"
        inputId="on_label"
        showIcon
        iconDisplay="input"
      />
      <label for="on_label">On Label</label>
    </FloatLabel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(null)
const value3 = ref(null)
</script>
