import api from './axios'

export async function fetchInvoices() {
  const invoicesResponse = []
  api
    .get('/invoice/manage')
    .then(function (response) {
      const invoicesResponse = response
    })
    .catch(function (error) {
      console.log(error)
    })
    .finally(function () {
      return invoicesResponse
    })
}
