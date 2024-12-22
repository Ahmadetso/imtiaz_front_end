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
    class="w-full h-fit rounded-md transition-all transform"
  >
    <button
      @click="IsActive = !IsActive"
      class="w-full h-fit text-SideBarItems hover:text-white flex justify-around"
    >
      <component :is="Icon" class="size-6"></component>
      <span class="font-normal">{{ Name }} </span>

      <IconArrow
        class="size-6 transition-transform duration-200"
        :class="{
          'rotate-0': !IsActive,
          '-rotate-90': IsActive,
        }"
      />
    </button>
    <transition
      enter-active-class="transition-opacity duration-200"
      leave-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        class="w-full items-center h-fit mt-2 pb-1 text-SideBarItems"
        v-if="IsActive"
      >
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>
