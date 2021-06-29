import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

import Home from '../views/Home.vue'
import Plans from '../views/Plans.vue'
import Plan from '../views/Plan.vue'
import Categories from '../views/Categories.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import RegisterUser from '../views/RegisterUser.vue'
import LoginUser from '../views/LoginUser.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUser
  },
  {
    path: '/profile',
    name: 'Profile',
    component: UserProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans,
    meta: { requiresAuth: true }
  },
  {
    path: '/plans/:id',
    name: 'Plan',
    props: true,
    component: Plan,
    meta: { requiresAuth: true }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories,
    meta: { requiresAuth: true }
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
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

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    const flashMessage = 'Sorry, you are not authorized to view this page.'
    store.dispatch('setFlashMessage', {
      message: flashMessage
    })

    setTimeout(() => {
      store.dispatch('setFlashMessage', {
        message: ''
      })
    }, 3000)

    if (from.href) { // <--- If this navigation came from a previous page.
      next(false)
    } else {  // <--- Must be navigating directly
      //return { path: '/' }  // <--- Push navigation to the root route.
      next('/')
    }
  } else {
    next()
  }
})

export default router
