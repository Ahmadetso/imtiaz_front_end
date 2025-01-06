import api from './axios'

export async function fetchInvoices() {
  api.get('/invoice/manage').then(function (response) {})
}
