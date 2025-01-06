<template>
  <div class="card flex justify-center">
    <AutoComplete
      v-model="value"
      dropdown
      :suggestions="items"
      @complete="search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import AutoComplete from 'primevue/autocomplete'

const value = ref('')
const items = ref([])
defineProps({
  title: String,
  suggestions: Array,
})
const search = event => {
  let _items = [...Array(10).keys()]

  items.value = event.query
    ? [...Array(10).keys()].map(item => event.query + '-' + item)
    : _items
}
</script>

<!-- <script setup>

</script>
<template>
  <div class="">

    <select
      id="countries"
      class="bg-gray-50 block border border-gray-300 size-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
    >
      <slot> </slot>
    </select>
  </div>
</template> -->
