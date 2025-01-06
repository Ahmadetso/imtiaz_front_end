import api from './axios'

export async function fetchInvoices() {
  try {
    const invoices = await api.get('/invoice/manage')
  } catch (error) {
    throw new Error(`Failed to fetch invoices: ${error.message}`, {
      cause: error,
    })
  }
}
