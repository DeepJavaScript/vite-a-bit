import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "../views/Home.vue")
  },
  {
    path: "/page",
    name: "page",
    component: () =>
      import(/* webpackChunkName: "Page" */ "../views/Page.vue")
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});