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
import { DataTable, Column } from 'primevue'
import { fetchInvoices } from '@/api/api'

const invoices = ref([])

onMounted(async () => {
  try {
    const response = await fetchInvoices()
    invoices.value = response.data.data
  } catch (error) {
    console.error('Error fetching invoices:', error)
  }
})
</script>
