export default {
  state: {
    application: null
  },
  mutations: {
    setApplication(state, data){
      state.application = data
    },
    setNull(state) {
      state.application = null
    }
  },
  getters: {
    getApplication(state){
      console.log(state.application)
      return state.application
    }
  }
}