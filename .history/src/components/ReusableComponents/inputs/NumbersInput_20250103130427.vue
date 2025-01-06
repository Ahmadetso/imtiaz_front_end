<script setup>
import InputNumber from 'primevue/inputnumber'

defineProps({
  placeholder: String,
})
</script>
<template>
  <InputNumber v-model="value1" inputId="integeronly" fluid />
  <!-- <div class="flex items-center">
    <input
      type="number"
      id="first_product"
      class="bg-gray-50 p-1 size-full border rounded-lg border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block"
      :placeholder="placeholder"
      required
    />
  </div> -->
</template>
