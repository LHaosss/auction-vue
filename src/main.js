import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueAxios, { $myHttp: axios })
app.provide('$myHttp', app.config.globalProperties.$myHttp)  // provide '$myHttp'

app.mount('#app')
