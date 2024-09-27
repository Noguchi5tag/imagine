import { createApp } from 'vue'
import './style.css'
import './assets/js/ScrollLink.js'
import VueScrollTo from 'vue-scrollto';
import App from './App.vue'

const app = createApp(App);
// VueScrollToをグローバルに登録
app.use(VueScrollTo);
app.mount('#app');
