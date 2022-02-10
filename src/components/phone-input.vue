<template>
  <div class="form-item">
    <label class="form-item__label" for="phone">телефон <sup>*</sup></label>
    <imask-input
      type="tel"
      class="reg-item__input"
      :class="{
        error:
          (submitted && !$v.phone.required) ||
          (submitted && !$v.phone.minLength),
      }"
      id="phone"
      :mask="'{+7} (000) 000-00-00'"
      radix="."
      :unmask="true"
      v-model="phone"
      @accept="validPhone"
      name="phone"
    />
    <p v-if="submitted && !$v.phone.required" class="msg-error">
      Заполните это поле
    </p>
    <p v-if="submitted && !$v.phone.minLength" class="msg-error">
      Минимум 2 символа
    </p>
  </div>
</template>

<script>
import { IMaskComponent } from "vue-imask";
import { minLength, required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      phone: "",
      submitted: false,
    };
  },
  methods: {
    validPhone() {
      this.submitted = true;
      if (this.$v.phone.required && this.$v.phone.minLength) {
        this.$emit("auth", this.phone);
      } else {
        this.$emit("auth", "");
      }
    },
  },
  validations: {
    phone: {
      required,
      minLength: minLength(2),
    },
  },
  components: {
    "imask-input": IMaskComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

// errors
.msg-error {
  top: size(75, 1905);
  @media (max-width: 744px) {
    top: size(75, 744);
  }
  @media (max-width: 320px) {
    top: size(70, 320);
    margin-bottom: size(20, 320);
  }
}
</style>
