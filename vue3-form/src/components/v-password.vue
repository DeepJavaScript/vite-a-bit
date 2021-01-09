<template>
  <div class="v-password">
    <VInput v-bind="$attrs" v-on="$attrs" type="text" v-if="is_clear"></VInput>
    <VInput v-bind="$attrs" v-on="$attrs" type="password" v-else></VInput>
    <label><input type="checkbox" v-model="is_clear" />看密碼</label>
  </div>
</template>

<script>
import VInput from './v-input.vue';

export default {
  components: {
    VInput
  },
  data() {
    return {
      is_clear: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
