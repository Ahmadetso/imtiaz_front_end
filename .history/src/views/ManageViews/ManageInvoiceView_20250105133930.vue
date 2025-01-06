<template>
  <div class="card" v-for="invoice in invoices.value" :key="invoices.id"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchInvoices } from '@/api/api'

const invoices = ref([])
onMounted(() => {
  fetchInvoices().then(Response => {
    invoices.value = Response.data.data
    console.log(invoices.value)
  })
})
</script>
