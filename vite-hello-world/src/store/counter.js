export default {
  namespaced: true,
  state() {
    return {
      count: 0
    };
  },
  getters: {
    count(state) {
      return state.count;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    }
  }
};