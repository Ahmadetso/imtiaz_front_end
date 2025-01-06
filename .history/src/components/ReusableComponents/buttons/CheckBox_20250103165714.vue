<script setup>
defineProps({
  label: String,
})
</script>
<template>
  <div class="flex">
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      class="w-4 h-4 text-blue-600 bg-gray-100 dark:text-DarkThemeText border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
    />
    <label
      for="default-checkbox"
      class="ms-2 text-sm font-medium text-gray-900 dark:text-DarkThemeText"
      >{{ label }}</label
    >
  </div>
</template>
