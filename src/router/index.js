import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Plans from '../views/Plans.vue'
import Plan from '../views/Plan.vue'
import Categories from '../views/Categories.vue'
import NotFound from '@/views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans
  },
  {
    path: '/plans/:id',
    name: 'Plan',
    props: true,
    component: Plan
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
