<template>
  <div id="app">
    <component :is="layout"/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/scss/style';
#app {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<script>
import HeaderApp from "./layouts/home-layout";
export default {
  components: {HeaderApp},
  computed: {
    layout(){
      return this.$route.meta.layout || "home-layout"
    }
  }
}
</script>