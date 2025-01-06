<template>
  <div class="grid p-16">
    <DataTable :value="invoices" tableStyle="min-width: 50rem">
      <Column field="id" header="رمز التعريف"></Column>
      <Column field="customer_name" header="العميل"></Column>
      <Column field="status" header="الحالة">
        <template #body="status">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            :class="{
              'bg-green-100 text-green-800': status === 'paid',
              'bg-red-100 text-red-800': status === 'unpaid',
              'bg-yellow-100 text-yellow-800': status === 'partially_paid',
            }"
          >
            {{ formatStatus(status) }}
          </span>
        </template>
      </Column>
      <Column field="date" header="التاريخ"></Column>
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
