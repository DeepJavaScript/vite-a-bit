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
    },
    doubleCount(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reset(state) {
      state.count = 0;
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    reset({ commit }) {
      commit('reset');
    }
  }
};