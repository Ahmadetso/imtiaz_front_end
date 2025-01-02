<script setup>
defineProps({
  title: String,
})
</script>
<template>
  <div class="">
    <select
      id="countries"
      class="bg-gray-50 block border border-gray-300 size-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <slot> </slot>
    </select>
  </div>
</template>
