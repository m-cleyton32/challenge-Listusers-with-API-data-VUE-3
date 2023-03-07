import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import store from './store.js';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.provide('store', store); 
app.mount('#app')

