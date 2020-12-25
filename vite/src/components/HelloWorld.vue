<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">click here</button>
  <span>{{ count }}</span>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
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
