<template>
  <div class="container">
    <ProfileForm />
  </div>
</template>

<script>
import ProfileForm from '/@/views/ProfileForm.vue';

export default {
  components: {
    ProfileForm
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  display: flex;
}
</style>
