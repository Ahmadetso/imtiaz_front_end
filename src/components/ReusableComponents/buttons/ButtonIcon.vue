<script setup>
import IconBarsArrowDown from '../icons/IconBarsArrowDown.vue'
defineProps({
  name: String,
})
</script>
<template>
  <div
    class="size-full p-4 flex justify-center hover:bg-gray-50 bg-white border-x-[1px]"
  >
    <span class="px-2">{{ name }}</span>
    <IconBarsArrowDown class="mt-1" />
  </div>
</template>
