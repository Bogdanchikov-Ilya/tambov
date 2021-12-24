<template>
  <div class="popup-wrapper">
    <div class="popup">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.46584 8.00012L15.6959 1.76972C16.1014 1.36446 16.1014 0.709208 15.6959 0.303946C15.2907 -0.101315 14.6354 -0.101315 14.2302 0.303946L7.99991 6.53434L1.76983 0.303946C1.36438 -0.101315 0.709335 -0.101315 0.304082 0.303946C-0.101361 0.709208 -0.101361 1.36446 0.304082 1.76972L6.53416 8.00012L0.304082 14.2305C-0.101361 14.6358 -0.101361 15.291 0.304082 15.6963C0.506044 15.8984 0.771594 16 1.03695 16C1.30231 16 1.56767 15.8984 1.76983 15.6963L7.99991 9.46589L14.2302 15.6963C14.4323 15.8984 14.6977 16 14.963 16C15.2284 16 15.4938 15.8984 15.6959 15.6963C16.1014 15.291 16.1014 14.6358 15.6959 14.2305L9.46584 8.00012Z" fill="black"/>
      </svg>
      <p class="popup-title">Создать заявку</p>
      <form action="#" class="popup-form">
        <div class="form-item">
          <label class="popup-item__label" for="title">заголовок <sup>*</sup></label>
          <input type="text" class="popup-item__input" id="title" name="title">
        </div>
        <div class="form-item">
          <label class="popup-item__label" for="text">текст заявки <sup>*</sup></label>
          <textarea rows="10" id="text" name="title"></textarea>
        </div>
        <input type="submit" class="btn btn-popup" value="создать заявку">
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/scss/style";
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
  background-color: rgba(0,0,0,0.5);
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
svg{
  position: absolute;
  top: size(14, 1905);
  right: size(13, 1905);
  cursor: pointer;
  width: size(16, 1905);
}
.popup-title{
  font-style: normal;
  font-weight: 500;
  font-size: size(24, 1905);
  line-height: size(29, 1905);
  text-align: center;
}

.popup-form{
  margin-top: size(25, 1905);
}

.form-item{
  margin-top: size(25, 1905);
  .textarea{
    height: size(205, 1905);
  }
}
.btn-popup{
  width: 100%;
  margin-top: size(52, 1905);
  padding: size(14.5, 1905) 0;
}
</style>