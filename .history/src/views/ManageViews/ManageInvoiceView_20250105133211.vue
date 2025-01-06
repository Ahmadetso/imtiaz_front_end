<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchInvoices } from '@/api/api'
const invoices = ref([])
fetchInvoices().then(Response => (invoices.value = Response.data))
console.log(invoices)
</script>
