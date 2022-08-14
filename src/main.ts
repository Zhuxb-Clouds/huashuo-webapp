import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'magic.css/dist/magic.min.css';
import 'hover.css/css/hover.css';
import App from './App.vue';
import router from './route/index'


// import axios from 'axios';
const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus);
// eslint-disable-next-line
app.use(pinia as any);
// eslint-disable-next-line
app.use(router as any);

app.mount('#app');
