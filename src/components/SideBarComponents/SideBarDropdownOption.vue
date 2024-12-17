<script setup>
import IconPlus from '../icons/IconPlus.vue'
defineProps({
  Name: String,
  QuickCreate: {
    type: Boolean,
    default: false,
  },
  Link: URL,
})
</script>
<template>
  <li
    class="h-5 w-fit mb-1 grid ltr:grid-cols-[15px_13rem] rtl:grid-cols-[239px_15px] justify-items-start"
  >
    <span class="mr-2 hover:text-white col-span-auto text-[13px]">
      <router-link to="/invoice/create">{{ Name }}</router-link>
    </span>
    <div>
      <IconPlus
        v-if="QuickCreate"
        class="size-[12px] hover:text-white mt-[5px] opacity-0 col-span-1 group-hover:opacity-100 transform transition-all ease-out"
      />
    </div>
  </li>
</template>
s
