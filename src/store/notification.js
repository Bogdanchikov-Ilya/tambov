export default {
  state: {
    errorText: "",
  },
  mutations: {
    setErrorText(state, payload) {
      state.errorText = payload;
      setTimeout(() => {
        state.errorText = "";
      }, 4000);
    },
  },
  getters: {
    getErrorText(state) {
      return state.errorText;
    },
  },
};
