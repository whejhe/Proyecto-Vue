import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {router} from './router/index.js';
import '@mdi/font/css/materialdesignicons.css'
import './utils/css/estilosGlobales.css';



const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/'
})

loadFonts()

const pinia = createPinia();

createApp(App)
  .use(VueAxios,axiosInstance)
  .use(router)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
  
