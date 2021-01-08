<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss" scoped>
nav {
  a {
    font-weight: bold;
    color: $greyish;

    &.router-link-exact-active {
      color: $green;
    }
  }
}
</style>
