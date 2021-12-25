<template>
  <div class="header-wrapper">
    <div class="container">
      <header>
        <nav>
          <router-link to="/auth" class="logo">logo</router-link>
        </nav>
      </header>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.header-wrapper{
  display: flex;
  align-items: center;
  height: size(86, 1905);
}
header{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo{
  font-family: 'CeraPro-Bold', sans-serif;
  font-weight: bold;
  font-size: size(24, 1905);
  line-height: size(30, 1905);
  text-transform: uppercase;
  outline: none;
}

@media (max-width: 744px){
  .header-wrapper{
    height: size(72, 744);
  }
  .logo{
    font-size: size(24, 744);
    line-height: size(30, 744);
  }
}
@media (max-width: 320px){
  .header-wrapper{
    height: size(40, 320);
  }
  .logo{
    font-size: size(18, 320);
    line-height: size(23, 320);
  }
}
</style>