<script setup>
defineProps({
  title: String,
})
</script>
<template>
  <div class="">
    <select
      id="countries"
      placeholder="hehe"
      class="bg-gray-50 block border border-gray-300 size-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
    >
      <slot> </slot>
    </select>
  </div>
</template>
