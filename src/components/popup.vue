<template>
<transition name="fade">
  <div class="popup-wrapper" v-if="isOpen">
    <div class="popup">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="close-btn" @click="close">
        <path d="M9.46584 8.00012L15.6959 1.76972C16.1014 1.36446 16.1014 0.709208 15.6959 0.303946C15.2907 -0.101315 14.6354 -0.101315 14.2302 0.303946L7.99991 6.53434L1.76983 0.303946C1.36438 -0.101315 0.709335 -0.101315 0.304082 0.303946C-0.101361 0.709208 -0.101361 1.36446 0.304082 1.76972L6.53416 8.00012L0.304082 14.2305C-0.101361 14.6358 -0.101361 15.291 0.304082 15.6963C0.506044 15.8984 0.771594 16 1.03695 16C1.30231 16 1.56767 15.8984 1.76983 15.6963L7.99991 9.46589L14.2302 15.6963C14.4323 15.8984 14.6977 16 14.963 16C15.2284 16 15.4938 15.8984 15.6959 15.6963C16.1014 15.291 16.1014 14.6358 15.6959 14.2305L9.46584 8.00012Z" fill="black"/>
      </svg>
      <p class="form-title">Создать заявку</p>
      <form action="#" class="popup-form" @submit="createApp">
        <div class="form-item">
          <!--    {{$v.login.required}} {{$v.login.minLength}}-->
          <label class="form-item__label" for="title">заголовок <sup>*</sup></label>
          <input type="text" class="reg-item__input"
                 v-model="title"
                 @input="submittedTitle = true"
                 :class="{'error': submittedTitle && !$v.title.required}"
                 id="title" name="title">
          <p v-if="submittedTitle && !$v.title.required" class="msg-error">Заполните это поле</p>
        </div>
        <div class="form-item">
          <label class="popup-item__label" for="text">текст заявки <sup>*</sup></label>
          <textarea id="text"
                    name="title"
                    v-model="textarea"
                    @input="submittedTextarea = true"
                    :class="{'error': submittedTextarea && !$v.textarea.required}"></textarea>
          <p v-if="submittedTextarea && !$v.textarea.required" class="msg-error textarea">Заполните это поле</p>
        </div>
        <btnPrimary text="создать заявку" @click="createApp" />
      </form>
    </div>
  </div>
</transition>
</template>

<script>
import defaultInput from '@/components/default-input'
import btnPrimary from '@/components/btn-primary'

import {required} from "vuelidate/lib/validators";
import appServices from '@/services/app-services'
export default {
  components: {btnPrimary, defaultInput},
  data () {
    return {
      isOpen: false,
      title: '',
      textarea: '',
      submittedTitle: false,
      submittedTextarea: false
    }
  },
  created() {
    this.appServices = new appServices()
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  },
  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === "Escape") {
        this.close();
      }
    },
    open () {
      this.isOpen = true
    },
    close() {
      this.isOpen = false;
    },
    createApp(e) {
      e.preventDefault();
      this.submittedTitle = true
      this.submittedTextarea = true
      if(this.$v.title.required && this.$v.textarea.required){
        this.appServices.createApplication({
          token: localStorage.getItem('token'),
          task_info: {
            name: this.title,
            text_task: this.textarea
          }
        })
        // обновляю список
        this.appServices.loadApplications({token: localStorage.getItem('token')})
        this.$store.commit('setNull')

        this.title = ''
        this.submittedTitle = false
        this.textarea = ''
        this.submittedTextarea = false

        this.close()
      }
    }
  },
  validations: {
    title: {
      required
    },
    textarea: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";

// popup animation
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.popup-wrapper{
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  transition: opacity 0.3s ease;
  z-index: 999;
}

.popup{
  position: relative;
  width: size(534, 1905);
  padding: size(58, 1905) size(64, 1905) size(62, 1905);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  box-shadow: 0px 0px size(30, 1905) rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.close-btn{
  position: absolute;
  top: size(14, 1905);
  right: size(13, 1905);
  cursor: pointer;
  width: size(16, 1905);
}

.popup-form{
  margin-top: size(25, 1905);
  .btn-primary{
    width: 100%;
    margin-top: size(52, 1905);
  }
}

.form-item{
  margin-top: size(25, 1905);
  textarea{
    height: size(205, 1905) !important;
  }
}

@media (max-width: 744px){
  .popup{
    width: size(534, 744);
    padding: size(58, 744) size(64, 744) size(62, 744);
  }
  .close-btn{
    top: size(14, 744);
    right: size(13, 744);
    width: size(16, 744);
  }
  .popup-form{
    margin-top: size(25, 744);
    .btn-primary{
      width: 100%;
      margin-top: size(52, 744);
    }
  }
  .form-item{
    margin-top: size(25, 744);
    textarea{
      height: size(205, 744) !important;
    }
  }
}

@media (max-width: 320px){
  .popup{
    width: size(290, 320);
    padding: size(28, 320) size(24, 320) size(22, 320);
  }
  .close-btn{
    top: size(14, 320);
    right: size(13, 320);
    width: size(16, 320);
  }
  .popup-form{
    margin-top: size(25, 320);
    .btn-primary{
      width: 100%;
      margin-top: size(52, 320);
    }
  }
  .form-item{
    margin-top: size(25, 320);
    textarea{
      height: size(205, 320) !important;
    }
  }
}

// errors
.msg-error{
  &.textarea{
    top:size(235, 1905);
  }
  top: size(75, 1905);
  @media (max-width: 744px){
    &.textarea{
      top:size(235, 744);
    }
    top: size(75, 744);
  }
  @media (max-width: 320px){
    &.textarea{
      top:size(240, 320);
    }
    top: size(70, 320);
  }
}
</style>