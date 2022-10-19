import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import 'magic.css/dist/magic.min.css';
import 'hover.css/css/hover.css';
import App from './App.vue';
import router from './route/index'


// import axios from 'axios';
const pinia = createPinia();
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus);
// eslint-disable-next-line
app.use(pinia as any);
// eslint-disable-next-line
app.use(router as any);

app.mount('#app');
