import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0
  },
  getters: {
    count(state) {
      return state.count
    } 
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {},
})

export default store