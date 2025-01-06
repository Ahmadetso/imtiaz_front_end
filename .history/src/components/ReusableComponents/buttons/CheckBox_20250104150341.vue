<script setup>
defineProps({
  label: String,
})
</script>
<template>
  <div class="">
    <ToggleSwitch v-model="checked" />
    <label
      for="default-checkbox"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-DarkThemeText"
      >{{ label }}</label
    >
  </div>
</template>
