<script setup>
import DatePicker from 'primevue/datepicker'
import FloatLabel from 'primevue/floatlabel'

defineProps({
  title: String,
})
</script>
<template>
  <FloatLabel>
    <DatePicker
      v-model="value1"
      inputId="over_label"
      showIcon
      iconDisplay="input"
    />
    <label for="over_label">Over Label</label>
  </FloatLabel>
  <!-- <div class="">
    <div class="relative size-full max-w-sm">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"
      >
        <Icon-Calendar />
      </div>
      <input
        id="datepicker-orientation"
        datepicker
        datepicker-orientation="bottom right"
        type="text"
        class="bg-gray-50 border size-full border-gray-300 max-w-60 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ps-12 p-2"
        :placeholder="title"
      />
    </div>
  </div> -->
</template>
