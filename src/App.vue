<template>
  <div id="app">
    <preloader v-if="preloaderStatus"/>
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
import HeaderApp from "@/layouts/home-layout";
import preloader from "@/components/preloader";
export default {
  components: {HeaderApp, preloader},
  computed: {
    layout(){
      return this.$route.meta.layout || "home-layout"
    },
    preloaderStatus(){
      return this.$store.getters['getPreloaderStatus']
    }
  }
}
</script>