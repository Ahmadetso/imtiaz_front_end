<template>
  <div class="grid p-16">
    <DataTable :value="invoices" tableStyle="min-width: 50rem">
      <Column field="id" header="رمز التعريف">
        <template #body="slotProps">INV-{{ slotProps.data.id }}</template>
      </Column>
      <Column field="customer_name" header="العميل"></Column>
      <Column field="status" header="الحالة">
        <template #body="slotProps">
          <span
            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            :class="{
              'bg-green-100 text-green-800': slotProps.data.status === 'paid',
              'bg-red-100 text-red-800': slotProps.data.status === 'unpaid',
              'bg-yellow-100 text-yellow-800':
                slotProps.data.status === 'partially_paid',
            }"
          >
            {{ statusTranslations[slotProps.data.status] }}
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

const statusTranslations = {
  paid: 'مدفوع',
  unpaid: 'غير مدفوع',
  partially_paid: 'مدفوع جزئياً',
}

onMounted(async () => {
  try {
    const response = await fetchInvoices()
    invoices.value = response.data.data
    invoices.value.forEach(element => {
      for (let i = 5; i > element.id.toString().lenght; i--) {
        element.id = element.id + '0'
      }
    })
  } catch (error) {
    console.error('Error fetching invoices:', error)
  }
})
</script>
