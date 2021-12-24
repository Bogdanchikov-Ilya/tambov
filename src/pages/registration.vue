<template>
  <div class="home">
    <div class="form-wrapper">
      <span class="form-title">Регистрация</span>
      <form action="#" class="form">
        <div class="form-item">
          <label class="form-item__label" for="login">Логин*</label>
          <input type="text" class="form-item__input" id="login" name="login">
        </div>
        <div class="form-item">
          <label class="form-item__label" for="login">Пароль*</label>
          <input type="text" class="form-item__input" id="login" name="login">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.home{
  width: 100%;
  height: calc(100vh - 4.51444vw);
  background: #F2F2F2;
}
</style>