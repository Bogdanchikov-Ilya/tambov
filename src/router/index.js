import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/home')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../pages/auth'),
    meta:{
      layout: "logout-layout"
    }
  },
  {
    path: '/registerations',
    name: 'Registerations',
    component: () => import('../pages/registration'),
    meta:{
      layout: "logout-layout"
    }
  },
  {
    path: '/completed-reg',
    name: 'Completed-reg',
    component: () => import('../pages/completed-reg'),
    meta:{
      layout: "logout-layout"
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
