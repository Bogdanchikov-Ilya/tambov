import {api} from "../api/api"

import store from "../store"
import router from "../router";

class appServices {
  async loadApplications() {
    try {
      store.commit('setTrue')
      const result =  await api.post('/get_tasks/', {token: localStorage.getItem('token')});
      if(result.data.status === true) {
        return result.data.message
      } else {
        store.commit('setErrorText', result.data.message)
        return false
      }
    } catch (e) {
      throw e
    } finally {
      store.commit('setFalse')
    }
  }
  async storeApplications(data){
    data = await this.loadApplications()
    store.commit('setApplication', data)
  }
  getApplications(){
    if (store.getters.getApplication === null){
      this.storeApplications()
    }
    return store.getters.getApplication
  }
  async createApplication(data){
    try {
      store.commit('setNull')
      store.commit('setTrue')
      const result =  await api.post(`/create_task/`, data)
      if(result.data.status !== true){
        store.commit('setErrorText', result.data.message)
      }
      return result.data
    } catch (e) {
      console.log(e)
      throw e
    } finally {
      store.commit('setFalse')
    }
  }
}

export default appServices