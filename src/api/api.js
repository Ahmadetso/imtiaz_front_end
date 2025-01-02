import api from './axios'

export async function fetchInvoices() {
  try {
    const invoicesResponse = await api.get('/invoice/manage')
    return invoicesResponse
  } catch (error) {
    // Preserve the original error but add context
    throw new Error(`Failed to fetch invoices: ${error.message}`, {
      cause: error,
    })
  }
}
