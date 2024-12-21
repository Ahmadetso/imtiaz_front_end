<script setup>
import { ref } from 'vue'
import IconArrow from '../icons/IconArrow.vue'
defineProps({
  Icon: Object,
  Name: String,
})

let IsActive = ref(false)
</script>
<template>
  <div
    :class="{ 'bg-SideBarMultiSelection': IsActive }"
    class="w-full h-fit rounded-md group transition-all transform ease-out duration-[20ms]"
  >
    <button
      @click="IsActive = !IsActive"
      class="w-full h-fit text-SideBarItems hover:text-white flex justify-around"
    >
      <component :is="Icon" class="size-6"></component>
      <span class="font-normal">{{ Name }} </span>
      <IconArrow class="size-6" />
    </button>
    <ul
      class="w-full items-center h-fit mt-2 pb-1 text-SideBarItems"
      v-if="IsActive"
    >
      <slot> </slot>
    </ul>
  </div>
</template>
