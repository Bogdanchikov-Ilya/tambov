import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'

// layouts
import homeLayout from "./layouts/home-layout"
import logoutLayout from "./layouts/logout-layout"

Vue.component("home-layout", homeLayout)
Vue.component("logout-layout", logoutLayout)


Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  router,
  store,
  Vuelidate,
  render: h => h(App)
}).$mount('#app')
