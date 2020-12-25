<template>
  <h1>Home</h1>
  <span>{{ $store.state.count }}</span>
  <button @click="$store.commit('increment')">increment</button>
</template>

<script>
export default {
  name: 'Home'
}
</script>
