import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { installWikiUi } from '@simplewiki/ui'

const app = createApp(App)

installWikiUi(app)

app.use(createPinia())
app.use(router)

app.mount('#app')
