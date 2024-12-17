<script setup>
import IconSearch from '../icons/IconSearch.vue'
</script>
<template>
  <!--  -->
  <button
    class="grid grid-cols-[5rem_1fr_29px] text-[14px] text-SideBarItems relative place-items-center w-full p-2"
  >
    <span class="">CTRL + P</span>
    <span class="">...ابحث عن صفحة</span>
    <IconSearch class="size-4" />
  </button>

  <hr
    class="h-[2px] w-full bg-gradient-to-r from-transparent via-SideBarTop to-transparent border-0"
  />
</template>
