import api from './axios'

export async function fetchInvoices() {
  try {
    const response = await api.get('/invoice/manage')
    return response
  } catch (error) {
    console.error(error)
  }
}
