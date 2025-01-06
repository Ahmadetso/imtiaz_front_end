<template>
  <div class="card">
    <DataTable :value="invoices" tableStyle="min-width: 50rem">
      <Column field="id" header="Code"></Column>
      <Column field="customer_name" header="Name"></Column>
      <Column field="status" header="Category"></Column>
      <Column field="date" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchInvoices } from '@/api/api'
import { DataTable } from 'primevue'
import Column from 'primevue'

const invoices = ref([])
onMounted(() => {
  fetchInvoices().then(Response => {
    invoices.value = Response.data.data
    console.log(invoices.value)
  })
})
</script>
