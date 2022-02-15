import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './common/font.css'


createApp(App).use(store).use(router).use(VueAxios,axios).mount('#app')
