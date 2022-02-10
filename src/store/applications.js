export default {
  state: {
    application: null,
  },
  mutations: {
    setApplication(state, data) {
      state.application = data;
    },
    setNull(state) {
      state.application = null;
    },
  },
  getters: {
    getApplication(state) {
      return state.application;
    },
  },
};
