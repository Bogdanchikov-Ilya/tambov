import {api} from "../api/api"

import store from "../store"
import router from "../router";

class appServices {
  async loadApplications(data) {
    try {
      const result =  await api.post('/get_tasks/', {token: localStorage.getItem('token')});
      console.log(result.data)
      return result.data
    } catch (e) {
      throw e
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
      const result =  await api.post(`/create_task/`, data)
      if(result.data.status === true){
        alert('Создано')
      } else {
        alert(result.data.message)
      }
      console.log(result)
      return result.data
    } catch (e) {
      throw e
    }
  }
}

export default appServices