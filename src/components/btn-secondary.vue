<template>
  <router-link :to="to" class="btn-secondary">{{ text }}</router-link>
</template>

<script>
export default {
  props: {
    text: String,
    to: String
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";
.btn-secondary{
  font-style: normal;
  font-weight: normal;
  font-size: size(14, 1905);
  line-height: size(24, 1905);
  text-align: center;
  color: #4F8CFF;
  @media (max-width: 744px){
    font-size: size(15, 744);
    line-height: size(24, 744);
  }
  @media (max-width: 320px){
    font-size: size(14, 320);
    line-height: size(24, 320);
  }
}
</style>