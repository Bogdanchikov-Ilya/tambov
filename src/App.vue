<template>
  <div id="app">
    <header-app />
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
  //text-align: center;
  //color: #2c3e50;
}
</style>
<script>
import HeaderApp from "./components/header-app";
export default {
  components: {HeaderApp}
}
</script>