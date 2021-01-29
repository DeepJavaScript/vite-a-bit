<template>
  <div class="popover" v-if="popoverIsShow">
    <div class="popover-content">
      <h5>註冊成功</h5>
      <section>
        <div class="popover-img-wrapper">
          <img :src="userProfile.photoURL" alt="user-photo">
        </div>
        <div>姓名 {{ userProfile.name }}</div>
        <div>電話 {{ userProfile.tel }}</div>
        <div>日期 {{ userProfile.date }}</div>
        <div>時間 {{ userProfile.time }}</div>
        <div>興趣 {{ userProfile.interest }}</div>
        <div>標籤 {{ userProfile.tags }}</div>
        <div>居住地 {{ userProfile.location }}</div>
        <div>年齡 {{ userProfile.age }}</div>
        <div>電子信箱 {{ userProfile.email }}</div>
        <div>滿意度 {{ userProfile.evaluate }}</div>
        <div>備註 {{ userProfile.comment }}</div>
      </section>
      <button
        type="button"
        class="popover-button"
        @click="$emit('closePopover')"
      >好哦！</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popover',
  props: {
    popoverIsShow: {
      type: Boolean,
      default: false
    },
    userProfile: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  background: #00000088;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &-content {
    background-color: #fff;
    width: 80%;
    margin: 100px auto 0;
    padding: 20px;
    border-radius: 50px;
  }
  &-button {
    margin-top: 20px;
  }
  &-img-wrapper {
    border-radius: 99999px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
}
</style>