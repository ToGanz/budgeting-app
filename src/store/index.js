import { createStore } from 'vuex'
import plansModule from './modules/Plans/index.js'

const store = createStore({
  modules: {
    plans: plansModule
  }
})

export default store;
