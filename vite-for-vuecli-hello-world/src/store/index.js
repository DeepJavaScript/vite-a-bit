import { createStore } from 'vuex'


export default createStore({
  state: {
    name: "chris"
  },
  actions: {},
  mutations: {},
  getters: {
    name: state => state.name
  }
})


