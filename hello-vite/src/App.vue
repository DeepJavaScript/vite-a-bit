<template>
  <h1>Hello App!</h1>
  <nav>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </nav>
  <router-view></router-view>

  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div class="aaa">
    <p>xxx</p>
  </div>
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

<style>
router-link {
  display: inline-block;
  padding: 0 16px;
}
.aaa {
  p {
    color: blue;
  }
}
</style>