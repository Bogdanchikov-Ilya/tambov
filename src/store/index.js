import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import application from './applications'
import preloader from './preloader'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    application,
    preloader
  }
})
