<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/">HelloWorld</router-link>
  <router-link to="/about">About</router-link>
  <router-view />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
.logo {
  width: 200px;
  height: 200px;
  display: block;
  margin: 0 auto;
}
a {
  margin-right: 15px;
}
</style>
