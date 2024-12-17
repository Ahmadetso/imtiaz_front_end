<script setup>
import { ref } from 'vue'
import IconArrow from '../icons/IconArrow.vue'
defineProps({
  Icon: Object,
  Name: String,
  Link: String,
  IsMultiOption: Boolean,
})

let IsActive = ref(false)
</script>
<template>
  <div
    :class="{ 'bg-SideBarMultiSelection': IsActive }"
    class="w-full h-fit rounded-md pl-1 group transition-all transform ease-out duration-[20ms]"
  >
    <button
      @click="IsActive = !IsActive"
      class="size-fit text-SideBarItems ltr:justify-items-end justify-items-start hover:text-white grid ltr:grid-cols-[14px_205px_33px] rtl:grid-cols-[33px_205px_14px]"
    >
      <component :is="Icon" class="size-[20px] mt-[2px] mr-2"></component>
      <span class="text-[15px] font-normal">{{ Name }} </span>
      <IconArrow class="size-[14px] mt-[5px]" />
    </button>
    <ul class="w-full h-fit mt-2 pb-1 text-SideBarItems" v-if="IsActive">
      <slot> </slot>
    </ul>
  </div>
</template>
