export default {
  state: {
    loader: false,
  },
  mutations: {
    setFalse(state) {
      state.loader = false;
    },
    setTrue(state) {
      state.loader = true;
    },
  },
  getters: {
    getPreloaderStatus(state) {
      return state.loader;
    },
  },
};
