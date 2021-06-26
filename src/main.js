import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseInput from './components/form/BaseInput.vue'
import BaseButton from './components/ui/BaseButton.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('base-input', BaseInput)
app.component('base-button', BaseButton)

app.mount('#app')
