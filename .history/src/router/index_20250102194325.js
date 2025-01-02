import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateInvoiceView from '@/views/CreateViews/CreateInvoiceView.vue'
import ManageInvoiceView from '@/views/ManageViews/ManageInvoiceView.vue'

let routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/invoice/create',
    name: 'invoice_create',
    component: CreateInvoiceView,
  },
  {
    path: '/invoice/manage',
    name: 'invoice_manage',
    component: ManageInvoiceView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
