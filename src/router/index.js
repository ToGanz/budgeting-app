import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Plans from '../views/Plans.vue'
import Plan from '../views/Plan.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
