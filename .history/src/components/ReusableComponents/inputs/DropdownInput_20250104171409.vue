<script setup>
import { ref } from 'vue'
import FloatLabel from 'primevue/floatlabel'

import AutoComplete from 'primevue/autocomplete'

const value = ref('')
const items = ref([])
defineProps({
  label: String,
  suggestions: Array,
})
const search = event => {
  let _items = [...Array(10).keys()]

  items.value = event.query
    ? [...Array(10).keys()].map(item => event.query + '-' + item)
    : _items
}
</script>
<template>
  <div class="card flex w-full items-center justify-center">
    <FloatLabel variant="on">
      <AutoComplete
        v-model="value"
        inputId="on_label"
        dropdown
        :suggestions="items"
        @complete="search"
      />
      <label for="dropdown">{{ label }}</label>
    </FloatLabel>
  </div>
</template>

<style scoped>
.p-autocomplete-dropdown {
  --p-autocomplete-dropdown-active-border-color: #b1e5f2;
}
.p-floatlabel {
  --p-floatlabel-active-color: #b1e5f2;
}
</style>
