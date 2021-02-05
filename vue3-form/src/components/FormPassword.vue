<template>
  <input
    :type="isShowPassword ? 'text' : 'password'"
    id="password"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
  <FormCheckbox id="show-password" v-model="isShowPassword">
    看密碼
  </FormCheckbox>
</template>

<script>
import { ref } from 'vue';

import FormCheckbox from '@/components/FormCheckbox.vue';

export default {
  name: 'FormPassword',
  components: {
    FormCheckbox
  },
  props: {
    showPasswordId: {
      type: String,
      required: true
    },
    modelValue: {}
  },
  emits: ['update:modelValue'],
  setup() {
    const isShowPassword = ref(false);

    return {
      isShowPassword
    };
  }
};
</script>

<style lang="scss" scoped></style>
