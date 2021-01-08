<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <h1>{{ count }}</h1>
    <button @click="$store.commit('increment')">increment</button>
    <button @click="$store.commit('reset')">reset</button>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count;
    }
  }
}
</script>
