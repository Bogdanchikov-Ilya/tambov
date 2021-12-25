import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// layouts
import homeLayout from "./layouts/home-layout"
import logoutLayout from "./layouts/logout-layout"

Vue.component("home-layout", homeLayout)
Vue.component("logout-layout", logoutLayout)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
