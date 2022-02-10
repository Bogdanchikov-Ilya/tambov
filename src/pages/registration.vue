<template>
  <div class="reg-wrapper">
    <div class="container">
      <div class="reg">
        <p class="form-title">Регистрация</p>
        <form action="#" class="form" @submit="sendForm">
          <defaultInput labelText="ЛОГИН" ref="login" @auth="storeLogin" />
          <passwordInput
            labelText="повторите пароль"
            ref="password"
            :repeat="true"
            @auth="storePassword"
          />
          <phoneInput ref="phone" @auth="storePhone" />
          <div class="confirm">
            <input
              type="checkbox"
              v-model="confirm"
              class="reg-item__input"
              :class="{ error: submitted && !confirm }"
              @change="submitted = true"
              id="confirm"
              name="confirm"
            />
            <label class="popup-item__label" for="confirm"
              >Я согласен на обработку моих данных</label
            >
            <p v-if="submitted && !confirm" class="msg-error">
              Подтвердите согласие
            </p>
          </div>
          <btnPrimary text="зарегистрироваться" @click="sendForm" />
        </form>
        <btnSecondary text="Войти" to="/auth" />
      </div>
    </div>
  </div>
</template>

<script>
import defaultInput from "@/components/default-input";
import passwordInput from "@/components/password-input";
import phoneInput from "@/components/phone-input";
import btnPrimary from "@/components/btn-primary";
import btnSecondary from "@/components/btn-secondary";

import authServices from "@/services/auth-services";
export default {
  components: {
    defaultInput,
    passwordInput,
    phoneInput,
    btnPrimary,
    btnSecondary,
  },
  data() {
    return {
      reg: {
        authServices: null,
        login: "",
        password: "",
        phone: "",
      },
      confirm: false,
      submitted: false,
    };
  },
  created() {
    this.authServices = new authServices();
  },
  methods: {
    storeLogin(login) {
      this.reg.login = login;
    },
    storePassword(data) {
      this.reg.password = data.password;
    },
    storePhone(phone) {
      this.reg.phone = phone;
    },
    sendForm(e) {
      e.preventDefault();
      this.submitted = true;
      this.$refs.login.check();
      this.$refs.password.checkValidPassword();
      this.$refs.phone.validPhone();
      if (
        this.reg.login &&
        this.reg.password &&
        this.reg.phone &&
        this.confirm
      ) {
        this.authServices.register({
          login: this.reg.login,
          password: this.reg.password,
          phone: this.reg.phone,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.reg-wrapper {
  width: 100%;
  height: calc(100vh - 4.51444vw);
  background: #f2f2f2;
}
.reg {
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
  transform: translate(-50%, -50%);
}
form {
  margin-top: size(25, 1905);
  .form-item {
    margin-bottom: size(24, 1905);
  }
  .btn-primary {
    width: 100%;
    margin-top: size(52, 1905);
  }

  //checkbox

  .confirm {
    position: relative;
    margin-top: size(35, 1905);
    display: flex;
    align-items: center;
    input {
      cursor: pointer;
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    input + label {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    input + label::before {
      content: "";
      display: inline-block;
      width: size(16, 1905);
      height: size(16, 1905);
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #c6cedb;
      border-radius: size(2, 1905);
      margin-right: size(12, 1905);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }
    input:checked + label::before {
      border-color: #0b76ef;
      background-color: transparent;
      box-shadow: 0px 0px size(4, 1905) rgba(79, 140, 255, 0.25);
      background-image: url("../assets/img/checkbox-confirm-icon.svg");
    }
    label {
      font-size: size(12, 1905);
      line-height: size(16, 1905);
      color: #000000;
    }
  }
}
.btn-secondary {
  margin-top: size(15, 1905);
}

@media (max-width: 744px) {
  .reg-wrapper {
    height: calc(100vh - 9.67742vw);
  }
  .reg {
    width: size(550, 744);
    padding: size(58, 744) size(64, 744) size(50, 744);
    box-shadow: 0px 0px size(30, 744) rgba(0, 0, 0, 0.1);
  }
  form {
    margin-top: size(25, 744);
    .form-item {
      margin-bottom: size(24, 744);
    }
    .btn-primary {
      margin-top: size(52, 744);
    }
    .confirm {
      margin-top: size(35, 744);
      input + label::before {
        width: size(16, 744);
        height: size(16, 744);
        border-radius: size(2, 744);
        margin-right: size(12, 744);
      }
      input:checked + label::before {
        box-shadow: 0px 0px size(4, 744) rgba(79, 140, 255, 0.25);
      }
      label {
        font-size: size(12, 744);
        line-height: size(16, 744);
      }
    }
  }
  .btn-secondary {
    margin-top: size(15, 744);
  }
}
@media (max-width: 320px) {
  .reg-wrapper {
    height: calc(100vh - 12.5vw);
  }
  .reg {
    width: size(290, 320);
    padding: size(19, 320) size(24, 320) size(14, 320);
    box-shadow: 0px 0px size(30, 320) rgba(0, 0, 0, 0.1);
  }
  form {
    margin-top: size(11, 320);
    .form-item {
      margin-bottom: size(12, 320);
    }
    .btn-primary {
      margin-top: size(27, 320);
    }
    .confirm {
      margin-top: size(21, 320);
      input + label::before {
        width: size(16, 320);
        height: size(16, 320);
        border-radius: size(2, 320);
        margin-right: size(12, 320);
      }
      input:checked + label::before {
        box-shadow: 0px 0px size(4, 320) rgba(79, 140, 255, 0.25);
      }
      label {
        font-size: size(10, 320);
        line-height: size(16, 320);
        color: #000000;
      }
    }
  }
  .btn-secondary {
    margin-top: size(8, 320);
  }
}

// errors
.msg-error {
  top: size(30, 1905);
  @media (max-width: 744px) {
    top: size(30, 744);
  }
  @media (max-width: 320px) {
    top: size(22, 320);
    margin-bottom: size(20, 320);
  }
}
</style>
