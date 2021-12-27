<template>
  <div class="form-item">
<!--    {{$v.login.required}} {{$v.login.minLength}}-->
    <label class="form-item__label" for="login">{{labelText}} <sup>*</sup></label>
    <input type="text" class="reg-item__input" v-model="login"   @input="check" id="login" name="login" :class="{'error': submitted && !$v.login.required || submitted && !$v.login.minLength}">
    <p v-if="submitted && !$v.login.required" class="msg-error">Заполните это поле</p>
    <p v-if="submitted && !$v.login.minLength" class="msg-error">Минимум 2 символа</p>
  </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'
export default {
  props: {
    labelText: String
  },
  data () {
    return {
      login: '',
      submitted: false
    }
  },
  methods: {
    check(){
      this.submitted = true
      this.$emit('auth', this.login)
    }
  },
  validations: {
    login: {
      required,
      minLength: minLength(2)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.form-item {
  position: relative
}
.error{
  border: 1px solid #EE5173 !important;
  box-shadow: 0px 0px 5px rgba(253, 86, 122, 0.25);
}

.minL{
  border: 1px solid #EE5173 !important;
  box-shadow: 0px 0px 5px rgba(253, 86, 122, 0.25);
}
</style>