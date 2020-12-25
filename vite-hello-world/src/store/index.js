import { createStore } from "vuex";

import counter from './counter';

export default createStore({
  strict: true,
  devtools: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counter
  }
});
