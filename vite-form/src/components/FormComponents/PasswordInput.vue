<template>
  <label for="password">密碼</label>
  <input
    :type="passwordEncryption ? 'password' : 'text'"
    id="password"
    :value="password"
    @change.prevent="$emit('setProfile', {password: $event.target.value})"
  >
  <button type="button" @click.prevent="switchPassword">切換明碼/密碼</button>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  emits: ['setProfile'],
  data() {
    return {
      passwordEncryption: true
    }
  },
  methods: {
    switchPassword() {
      this.passwordEncryption = !this.passwordEncryption;
    }
  }
}
</script>

<style scoped>

</style>