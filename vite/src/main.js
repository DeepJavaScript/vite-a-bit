import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/hello-world'
import './index.css';

const app = createApp(App)

app.use(router)
app.mount('#app')
app.use(store)
