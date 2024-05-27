import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    title: '造光',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/products/index.vue')
  },
  {
    path: '/productsDetail',
    name: 'productsDetail',
    component: () => import('@/views/productsDetail/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/news/index.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/contact/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
