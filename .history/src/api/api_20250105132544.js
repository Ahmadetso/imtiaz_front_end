import api from './axios'

export async function fetchInvoices() {
  let invoicesResponse = []
  api
    .get('/invoice/manage')
    .then(function (response) {
      invoicesResponse = response
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      return invoicesResponse
    })
}
