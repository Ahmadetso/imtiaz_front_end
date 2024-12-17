<script setup>
defineProps({
  Icon: Object,
  Name: String,
  Link: String,
})
</script>
<template>
  <div
    class="size-fit text-SideBarItems justify-items-start hover:text-white grid grid-cols-[33px_219px]"
  >
    <component :is="Icon" class="mr-2 mt-[1px] size-[20px]"></component>
    <span class="text-[15px]">{{ Name }} </span>
  </div>
</template>
