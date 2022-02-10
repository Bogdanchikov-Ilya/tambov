<template>
  <div class="form-item">
    <!--    {{$v.login.required}} {{$v.login.minLength}}-->
    <label class="form-item__label" for="login"
      >{{ labelText }} <sup>*</sup></label
    >
    <input
      type="text"
      class="reg-item__input"
      v-model="login"
      @input="check"
      id="login"
      name="login"
      :class="{
        error:
          (submitted && !$v.login.required) ||
          (submitted && !$v.login.minLength),
      }"
    />
    <p v-if="submitted && !$v.login.required" class="msg-error">
      Заполните это поле
    </p>
    <p v-if="submitted && !$v.login.minLength" class="msg-error">
      Минимум 2 символа
    </p>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  props: {
    labelText: String,
  },
  data() {
    return {
      login: "",
      submitted: false,
    };
  },
  methods: {
    check() {
      this.submitted = true;
      this.login = this.login.trim();
      if (this.$v.login.required && this.$v.login.minLength) {
        this.$emit("auth", this.login);
      } else {
        this.$emit("auth", "");
      }
    },
  },
  validations: {
    login: {
      required,
      minLength: minLength(2),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.msg-error {
  top: size(75, 1905);
  @media (max-width: 744px) {
    top: size(75, 744);
  }
  @media (max-width: 320px) {
    top: size(70, 320);
  }
}
</style>
