import api from './axios'

export async function fetchInvoices() {
  const invoices = await api.get('/invoice/manage')
  return invoices
}
