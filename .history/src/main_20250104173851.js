import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { definePreset } from '@primevue/themes'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e5f9fc', // Lighter variation of #b1e5f2
      100: '#ccf1f8',
      200: '#99e3f1',
      300: '#66d5ea',
      400: '#33c7e3',
      500: '#00b9dc', // Original or closest to #b1e5f2
      600: '#0096af',
      700: '#007385',
      800: '#00515a',
      900: '#002f30',
      950: '#00161a', // Darkest variation
    },
  },
})

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.mount('#app')
