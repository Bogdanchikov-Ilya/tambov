<template>
  <div class="home">
    <popup ref="popup"/>
    <div class="container">
      <h1 class="title">Список заявок</h1>
      <p class="title subtitle" v-if="!applications">Ошибка загрузки</p>
      <ul class="applications" >
        <li class="applications-item" v-if="applications" v-for="item in applications">
          <span class="applications-item__title">{{item.name}}</span>
          <p class="applications-item__text">{{item.text_task }}</p>
        </li>
      </ul>
      <button class="btn btn-primary" @click="openPopup">Создать заявку</button>
    </div>
  </div>
</template>

<script>
import popup from "@/components/popup";
import appServices from '@/services/app-services'

export default {
  data () {
    return {
      test: '',
      appServices: null,
      error: ''
    }
  },
  computed: {
    applications() {
      return this.appServices.getApplications()
    }
  },
  methods: {
    openPopup () {
      this.$refs.popup.open()
    }
  },
  created() {
    let token = localStorage.getItem('token')
    if(!token) {
      console.log('no token' + token)
      this.$router.push('/auth')
    } else {
      console.log(token)
      this.appServices = new appServices()
      this.appServices.loadApplications({token: token})
    }

  },
  components: {
    popup
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

.home{
  width: 100%;
  height: calc(100vh - 4.51444vw);
  background: #F2F2F2;
}

.container{
  width: auto;
}

.title{
  width: 100%;
  padding: size(57, 1905) size(122, 1905) 0;
  font-size: size(32, 1905);
  font-style: normal;
  font-weight: 500;
  line-height: size(39, 1905);
}

.subtitle{
  text-align: center;
}

.applications{
  padding: size(10, 1905) size(122, 1905);
  max-height: 62.90909090909091vh;
  overflow-y: auto;
  margin-top: size(14, 1905);
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 4px !important;
    background-color: transparent !important;
    margin-right: size(20, 1905) !important;

  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: #EE5173;

  }
  &::-webkit-scrollbar-track {
    margin-top: size(20, 1905);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: #ffffff !important;
  }
}

.applications-item{
  display: inline-block;
  border-radius: size(5, 1905);
  margin-top: size(20, 1905);
  background: white;
  width: 100%;
  padding: size(30, 1905);
  box-shadow: 0px 0px size(30, 1905) rgba(0, 0, 0, 0.1);
  .applications-item__title{
    font-style: normal;
    font-weight: 500;
    font-size: size(24, 1905);
    line-height: size(29, 1905);
  }
  .applications-item__text{
    margin-top: size(17, 1905);
    font-style: normal;
    font-weight: 400;
    font-size: size(15, 1905);
    line-height: size(24, 1905);
  }
}

button{
  display: block;
  width: size(406, 1905);
  margin: size(47, 1905) auto;
}

@media (max-width: 744px){
  .home{
    height: calc(100vh - 9.67742vw);
  }
  .title{
    padding-top: size(26, 744);
    font-size: size(24, 744);
    line-height: size(29, 744);
  }
  .applications{
    padding: size(10, 744) size(40, 744);
    margin-top: size(11, 744);
    max-height: 65.90909090909091vh;
  }
  .applications-item{
    padding: size(25, 744);
    margin-top: size(15, 744);
    border-radius: size(5, 744);
    box-shadow: 0px 0px size(30, 744) rgba(0, 0, 0, 0.1);
    .applications-item__title{
      font-size: size(18, 744);
      line-height: size(22, 744);
    }
    .applications-item__text{
      margin-top: size(9, 744);
      font-size: size(14, 744);
      line-height: size(24, 744);
    }
  }
  button{
    display: block;
    width: size(264, 744);
    margin: size(39, 744) auto;
  }
}
@media (max-width: 320px){
  .home{
    height: calc(100vh - 12.5vw);
  }
  .title{
    padding-top: size(26, 320);
    font-size: size(18, 320);
    line-height: size(22, 320);
  }
  .applications{
    padding: size(10, 320) size(15, 320);
    max-height: 62.90909090909091vh;
    margin-top: size(8, 320);
  }
  .applications-item{
    padding: size(16, 320);
    margin-top: size(10, 320);
    border-radius: size(5, 320);
    box-shadow: 0px 0px size(30, 320) rgba(0, 0, 0, 0.1);
    .applications-item__title{
      font-size: size(16, 320);
      line-height: size(20, 320);
    }
    .applications-item__text{
      margin-top: size(9, 320);
      font-size: size(13, 320);
      line-height: size(18, 320);
    }
  }
  button{
    display: block;
    width: size(290, 320);
    margin: size(40.5, 320) auto;
  }
}
</style>