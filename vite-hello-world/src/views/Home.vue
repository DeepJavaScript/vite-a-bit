<template>
  <div class="home">
    <h1>This is an home page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>