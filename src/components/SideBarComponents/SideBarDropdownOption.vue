<script setup>
// import IconPlus from '../icons/IconPlus.vue'
defineProps({
  Name: {
    type: String,
    required: true,
  },
  QuickCreate: {
    type: String,
    default: '',
  },
  Link: {
    type: String,
    required: true,
  },
  LinkCreate: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <li
    class="w-full grid place-items-center"
    :class="{ 'grid-cols-2': QuickCreate }"
  >
    <router-link :to="Link">
      <span class="text-sm hover:text-white">
        {{ Name }}
      </span>
    </router-link>
    <router-link :to="LinkCreate" v-if="QuickCreate">
      <span class="text-sm hover:text-white">
        {{ QuickCreate }}
      </span>
    </router-link>
  </li>
</template>
