<script setup>
defineProps({
  title: String,
  type: String,
  icon: Object,
})
</script>
<template>
  <button
    class="size-full p-4 flex justify-center hover:bg-gray-50 bg-white dark:bg-SideBarBlue"
    :type="type"
  >
    <span class="px-2">{{ title }}</span>
    <component :is="icon" />
  </button>
</template>
