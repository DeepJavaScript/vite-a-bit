<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" :count="count" @increment="$store.commit('increment')"/>
  <router-link to="/page">to page</router-link>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    count() {
      return this.$store.getters.count
    }
  }
}
</script>

<style>

</style>