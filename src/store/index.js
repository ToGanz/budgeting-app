import { createStore } from 'vuex'

import rootMutations from './mutations.js'
import rootActions from './actions.js'
import rootGetters from './getters.js'

import plansModule from './modules/Plans/index.js'
import usersModule from './modules/Users/index.js'
import categoriesModule from './modules/Categories/index.js'
import transactionsModule from './modules/Transactions/index.js'

const store = createStore({
  modules: {
    plans: plansModule,
    users: usersModule,
    categories: categoriesModule,
    transactions: transactionsModule
  },
  state() {
    return {
      flashMessage: ''
    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
})

export default store
