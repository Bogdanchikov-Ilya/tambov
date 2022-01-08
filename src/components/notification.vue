<template>
  <transition name="slide-fade">
    <div class="notification"
         v-if="errorText">
      <div class="notification-wrapper">
        <div class="content">
          <p class="title">Ошибка - {{ errorText }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      show: true,
    }
  },
  computed: {
    errorText () {
      return this.$store.getters.getErrorText
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";
.notification{
  text-align: center;
  position: fixed;
  background-color: #EE5173;
  right: size(200, 1905);
  left: size(200, 1905);
  bottom: size(100, 1905);
  z-index: 999;
  padding: 1vw;
  border-radius: 5px;
  .content{
    .title{
      color: white;
    }
  }
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}
</style>