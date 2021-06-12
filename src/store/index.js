import { createStore } from 'vuex'
import plansModule from './modules/Plans/index.js'
import usersModule from './modules/Users/index.js'

const store = createStore({
  modules: {
    plans: plansModule,
    users: usersModule
  }
})

export default store;
