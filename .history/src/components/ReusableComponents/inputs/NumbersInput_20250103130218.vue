<script setup>
import InputNumber from 'primevue/inputnumber'
import { ref } from 'vue'

const value = ref(50)

defineProps({
  placeholder: String,
})
</script>
<template>
  <div class="card flex justify-center">
    <InputNumber
      v-model="value"
      showButtons
      buttonLayout="horizontal"
      style="width: 1rem"
      :min="0"
      :max="99"
    >
      <template #incrementbuttonicon>
        <span class="pi pi-plus" />
      </template>
      <template #decrementbuttonicon>
        <span class="pi pi-minus" />
      </template>
    </InputNumber>
  </div>

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
