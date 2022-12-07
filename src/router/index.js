import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'Contact us',
    component: () => import('@/views/ContactVac.vue'),
  },
  {
    path: '/about',
    name: 'About VAC',
    component: () => import('@/views/AboutVac.vue'),
  },
  {
    path: '/loan',
    name: 'Loan Rates',
    component: () => import('@/views/LoanVac.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/VideoVac.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/BlogVac.vue'),
  },
  {
    path: '/calculate',
    name: 'Calculate',
    component: () => import('@/views/CalculateVac.vue'),
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/TermsVac.vue'),
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/PrivacyVac.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
