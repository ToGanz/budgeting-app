import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseInput from './components/base/BaseInput.vue'
const app = createApp(App)

app.use(store)
app.use(router)

app.component('base-input', BaseInput)

app.mount('#app')
