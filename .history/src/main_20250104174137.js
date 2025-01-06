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
      50: '#f0fbfd', // Lightest shade
      100: '#e1f7fb',
      200: '#c3eef7',
      300: '#a5e6f3',
      400: '#87ddf0',
      500: '#b1e5f2', // Base color
      600: '#6ac7e1',
      700: '#4aaecb',
      800: '#3a8ba3',
      900: '#2a687b', // Darkest shade
    },
  },
})

app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
  },
})
app.mount('#app')
