import { createStore } from 'vuex'

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import plansModule from './modules/Plans/index.js'
import usersModule from './modules/Users/index.js'

const store = createStore({
  modules: {
    plans: plansModule,
    users: usersModule
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

export default store;
