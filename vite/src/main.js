import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/hello-world'
import './index.css';

// const app = createApp(App)
// app.use(router)
// app.use(store)
// app.mount('#app')


// 更簡潔的註冊法 Vue3 才有的功能
createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
