<script setup>
defineProps({
  placeholder: String,
})
</script>
<template>
  <div class="flex items-center">
    <input
      type="number"
      id="first_product"
      class="bg-gray-50 p-1 size-full border rounded-lg border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
      required
    />
  </div>
</template>
