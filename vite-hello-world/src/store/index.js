import { createStore, createLogger } from 'vuex';

import counter from './counter';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  strict: true,
  devtools: true,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    counter
  },
  plugins: debug ? [createLogger()] : []
});
