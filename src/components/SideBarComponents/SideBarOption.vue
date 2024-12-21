<script setup>
defineProps({
  Icon: Object,
  Name: String,
  Link: String,
})
</script>
<template>
  <div
    class="size-fit text-SideBarItems justify-items-start hover:text-white flex"
  >
    <component :is="Icon" class="size-4"></component>
    <span class="text-4">{{ Name }} </span>
  </div>
</template>
