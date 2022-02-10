<template>
  <div class="auth-wrapper">
    <div class="container">
      <div class="auth">
        <p class="form-title">Готово!</p>
        <p class="completed-text">
          <span>Вы успешно зарегистрировались!</span>
          <span>Теперь вы можете войти.</span>
        </p>
        <router-link to="auth" class="btn btn-primary">войти</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: "password",
    };
  },
  methods: {
    password(st) {
      if (st === "password") this.showPassword = "text";
      else this.showPassword = "password";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.auth-wrapper {
  width: 100%;
  height: calc(100vh - 4.51444vw);
  background: #f2f2f2;
}
.auth {
  width: size(534, 1905);
  padding: size(58, 1905) size(64, 1905) size(57, 1905);
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

.completed-text {
  font-size: size(15, 1905);
  line-height: size(24, 1905);
  text-align: center;
  margin-top: size(25, 1905);
  span {
    display: block;
  }
}

.btn {
  width: size(212, 1905);
  text-align: center;
  margin: size(27, 1905) auto 0;
}

@media (max-width: 744px) {
  .auth-wrapper {
    height: calc(100vh - 9.67742vw);
  }
  .auth {
    width: size(550, 744);
    padding: size(58, 744) size(64, 744) size(50, 744);
    box-shadow: 0px 0px size(30, 744) rgba(0, 0, 0, 0.1);
  }
  .completed-text {
    font-size: size(15, 744);
    line-height: size(24, 744);
    margin-top: size(25, 744);
  }
  .btn {
    width: size(212, 744);
    margin: size(27, 744) auto 0;
  }
}
@media (max-width: 320px) {
  .auth-wrapper {
    height: calc(100vh - 12.5vw);
  }
  .auth {
    width: size(290, 320);
    padding: size(28, 320) size(24, 320) size(20, 320);
    box-shadow: 0px 0px size(30, 744) rgba(0, 0, 0, 0.1);
  }
  .completed-text {
    font-size: size(15, 320);
    line-height: size(24, 320);
    margin-top: size(25, 320);
  }
  .btn {
    width: size(212, 320);
    margin: size(27, 320) auto 0;
  }
}
</style>
