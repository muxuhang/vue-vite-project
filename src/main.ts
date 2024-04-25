import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store";
import "./utils/flexible";
import { Lazyload, Space, Empty, Button } from 'vant';
import 'vant/lib/index.css';
import router from './router'

const app = createApp(App)
app.use(Lazyload)
  .use(Space)
  .use(router)
  .use(store)
  .use(Empty)
  .use(Button)
app.mount('#app')
