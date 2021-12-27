<template>
  <div class="auth-wrapper">
    <div class="container">
      <div class="auth">
        <p class="form-title">Авторизация</p>
        <form action="#" class="form" @submit="sendForm">
          <defaultInput labelText="логин" @auth="storeLogin" />
          <passwordInput labelText="пароль" @auth="storePassword" />
          <btnPrimary text="Войти"/>
        </form>
        <btnSecondary text="Зарегистрироваться" to="/registerations"@click="sendForm"/>
      </div>
    </div>
  </div>
</template>
<script>
import defaultInput from '@/components/default-input'
import passwordInput from '@/components/password-input'
import btnPrimary from '@/components/btn-primary'
import btnSecondary from '@/components/btn-secondary'

import authServices from "@/services/auth-services";
export default {
components: {defaultInput, passwordInput, btnPrimary, btnSecondary},
  data () {
    return {
      auth: {
        login: '',
        password: '',
        authServices: null,
      }
    }
  },
  created() {
    this.authServices = new authServices()
  },
  methods: {
    storeLogin(login) {
      this.auth.login = login
    },
    storePassword(data){
      this.auth.password = data.password
    },
    sendForm(e) {
      e.preventDefault()
      this.authServices.login({
        login: this.auth.login,
        password: this.auth.password,
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.auth-wrapper{
  width: 100%;
  height: calc(100vh - 4.51444vw);
  background: #F2F2F2;
}
.auth{
  width: size(534, 1905);
  padding: size(58, 1905) size(64, 1905) size(44, 1905);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  box-shadow: 0px 0px size(30, 1905) rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
form{
  margin-top: size(25, 1905);
  .form-item {
    margin-bottom: size(24, 1905);
  }
  .btn-primary{
    width: 100%;
    margin-top: size(56, 1905);
  }
  .input-password__wrapper{
    position: relative;
    svg{
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: size(16, 1905);
      transform: translateY(-50%);
      width: size(20, 1905);
    }
    input, input[type="text"]{
      width: 100%;
      // запрещаю выделение пароля
      -o-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }
  }
}
.btn-secondary{
  margin-top: size(39, 1905);
}

@media (max-width: 744px){
  .auth-wrapper{
    height: calc(100vh - 9.67742vw);
  }
  .auth{
    width: size(550, 744);
    padding: size(58, 744) size(64, 744) size(50, 744);
    box-shadow: 0px 0px size(30, 744) rgba(0, 0, 0, 0.1);
  }
  form{
    margin-top: size(25, 744);
    .form-item {
      margin-bottom: size(24, 744);
    }
    .btn-primary{
      margin-top: size(52, 744);
    }
    .input-password__wrapper{
      svg{
        right: size(15, 744);
        width: size(20, 744);
      }
    }
  }
  .register{
    margin-top: size(15, 744);
  }
}
@media (max-width: 320px){
  .auth-wrapper{
    height: calc(100vh - 12.5vw);
  }
  .auth{
    width: size(290, 320);
    padding: size(19, 320) size(24, 320) size(14, 320);
    box-shadow: 0px 0px size(30, 320) rgba(0, 0, 0, 0.1);
  }
  form{
    margin-top: size(11, 320);
    .form-item {
      margin-bottom: size(12, 320);
    }
    .btn-primary{
      margin-top: size(8, 320);
    }
    .input-password__wrapper{
      svg{
        right: size(11, 320);
        width: size(20, 320);
      }
    }
  }
  .register{
    margin-top: size(8, 320);
  }
}
</style>