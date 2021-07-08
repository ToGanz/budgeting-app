import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'
import store from './store'

import BaseInput from './components/form/BaseInput.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseSpinner from './components/ui/BaseSpinner.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.component('base-input', BaseInput)
app.component('base-button', BaseButton)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)

app.mount('#app')
