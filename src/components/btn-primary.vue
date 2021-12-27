<template>
  <button class="btn btn-primary">{{text}}</button>
</template>

<script>
export default {
  props: {
    text: String
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";
.btn-primary{
  border-radius: size(5, 1905);
  background: #EE5173;
  transition: 0.1s ease-in;
  padding: size(14.5, 1905) 0;
  &:hover{
    background: #f86686;
    transition: 0.1s ease-in;
  }
  &:active{
    background: #c9637c;
  }
  @media (max-width: 744px){
    padding: size(14.5, 744) 0;
    border-radius: size(5, 744);
    line-height: size(16, 744);
    font-size: size(13, 744);
  }
  @media (max-width: 320px){
    padding: size(12.5, 320) 0;
    border-radius: size(5, 320);
    line-height: size(15, 320);
    font-size: size(12, 320);
  }
}
</style>