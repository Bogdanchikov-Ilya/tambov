<template>
  <div class="home">
    <popup/>
    <div class="container">
      <h1 class="title">Список заявок</h1>
      <ul class="applications">
        <li class="applications-item" v-for="item in 3">
          <span class="applications-item__title">Заголовок заявки</span>
          <p class="applications-item__text">Гомогенная среда экстремально отклоняет фонон. Турбулентность стабилизирует гидродинамический удар. Сверхновая тормозит фонон. Призма, как следует из совокупности экспериментальных наблюдений, притягивает лазер.</p>
        </li>
      </ul>
      <button class="btn btn-create" @click="popup">Создать заявку</button>
    </div>
  </div>
</template>

<script>
import popup from "../components/popup";
export default {
  data () {
    return {
      applications: null
    }
  },
  methods: {
    popup() {

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

.title{
  padding-top: size(57, 1905);
  font-size: size(32, 1905);
  font-style: normal;
  font-weight: 500;
  line-height: size(39, 1905);

}

.applications{
  margin-top: size(14, 1905);
  display: flex;
  flex-direction: column;
  .applications-item{
    border-radius: size(5, 1905);
    margin-top: size(20, 1905);
    background: white;
    width: 100%;
    padding: size(30, 1905);
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
}
.btn-create{
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-radius: size(5, 1905);
  background: #EE5173;
  display: block;
  margin: auto;
  font-weight: 600;
  line-height: size(16, 1905);
  margin-top: size(47, 1905);
  text-transform: uppercase;
  font-size: size(13, 1905);
  padding: size(14, 1905) size(114, 1905);
}
</style>