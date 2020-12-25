<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">click here</button>
  <span>{{ count }}</span>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  computed: {
    // 在 computed 內拿到 getters 的資料
    count() {
      return this.$store.getters.count;
    }
  },
  methods: {
    // 用 commit 觸發 mutations 內的事件
    increment () {
      this.$store.commit('increment');
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  margin-right: 10px;
}
span {
  font-size: 30px;
  font-weight: 600;
  line-height: 0;
  vertical-align: middle;
}
</style>
