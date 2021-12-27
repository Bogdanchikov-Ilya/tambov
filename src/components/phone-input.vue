<template>
  <div class="form-item">
    <label class="form-item__label" for="phone">телефон <sup>*</sup></label>
    <input type="tel" class="reg-item__input" id="phone" v-model="phone" :input="$emit('auth', phone)" name="phone">
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

</style>