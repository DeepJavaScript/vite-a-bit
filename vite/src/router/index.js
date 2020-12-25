// import Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import About from '../components/About.vue';

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history : createWebHashHistory(),
  routes
})

export default router;