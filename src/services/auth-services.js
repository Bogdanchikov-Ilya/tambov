import {api} from "../api/api";

import store from "../store";
import router from "../router";

class authServices {
  async register(data) {
    try {
      store.commit("setTrue");
      const result = await api.post("/registration/", data);
      console.log(result)
      if (
        result.data.status === 200 ||
        result.data.status === 200 ||
        result.data.status === true
      ) {
        router.push({name: "Completed-reg"});
      } else {
        store.commit("setErrorText", result.data.message);
      }
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      store.commit("setFalse");
    }
  }

  async login(data) {
    try {
      store.commit("setTrue");
      const result = await api.post("/login/", data);
      console.log(result)
      if (
        result.data.status === 200 ||
        result.data.status === 200 ||
        result.data.status === true
      ) {
        store.commit("setNull");
        localStorage.setItem("token", result.data.token);
        router.push({name: "Home"});
      } else {
        store.commit("setErrorText", result.data.message);
      }
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      store.commit("setFalse");
    }
  }

  async logout(token) {
    try {
      store.commit("setTrue");
      const result = await api.post("/logout/", token);
      if (
        result.data.status === 200 ||
        result.data.status === 200 ||
        result.data.status === true
      ) {
        localStorage.clear();
        store.commit("setNull");
        router.push({name: "Auth"});
      } else {
        store.commit("setErrorText", result.data.message);
      }
    } catch (e) {
      console.log(e);
      throw e;
    } finally {
      store.commit("setFalse");
    }
  }
}

export default authServices;
