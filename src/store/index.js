import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import application from "./applications";
import preloader from "./preloader";
import notification from "./notification";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    application,
    preloader,
    notification,
  },
});
