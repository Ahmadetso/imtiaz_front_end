<script setup>
import { ToggleSwitch } from 'primevue'

defineProps({
  label: String,
})
</script>
<template>
  <div class="flex">
    <ToggleSwitch v-model="checked" />
    <label
      for="default-checkbox"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-DarkThemeText"
      >{{ label }}</label
    >
  </div>
</template>
<style scoped>
.p-toggleswitch {
  --p-toggleswitch-checked-background: #b1e5f2;
  --p-toggleswitch-checked-hover-background: transparent;
}
</style>
