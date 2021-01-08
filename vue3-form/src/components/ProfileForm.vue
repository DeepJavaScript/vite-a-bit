<template>
  <h1>表單</h1>
  <form action="">
    name: {{ name }} phone: {{ phone }}
    <VInput
      label="姓名"
      placeholder="Chris"
      type="text"
      name="name"
      v-model="name"
      required
    ></VInput>
    <VInput
      label="電話"
      placeholder="0921026229"
      type="tel"
      name="phone"
      v-model="phone"
    ></VInput>
    <input type="submit" value="submit" />
    <input type="reset" value="reset" />
  </form>
</template>

<script>
import VInput from './v-input.vue';

export default {
  components: {
    VInput
  },
  data() {
    return {
      name: '',
      phone: ''
    };
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
