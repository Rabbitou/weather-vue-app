import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.params = { appid: import.meta.env.VITE_API_KEY };

createApp(App).mount('#app')
