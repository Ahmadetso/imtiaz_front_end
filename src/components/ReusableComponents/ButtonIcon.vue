<script setup>
defineProps({
  name: String,
  icon: Object,
})
</script>
<template>
  <div
    class="size-full p-4 flex justify-center hover:bg-gray-50 bg-white border-x-[1px]"
  >
    <span class="px-2">{{ name }}</span>
    <component :is="icon" class="mt-1" />
  </div>
</template>
