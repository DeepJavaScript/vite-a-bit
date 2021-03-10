<template>
  <div>
    <v-input
      v-model="value"
      :inputType="passwordType"
      :label="label"
      :name="name"
    />
    <input type="checkbox" id="passwordSwitch" v-model="isPasswordShown" />
    <label for="passwordSwitch">看明碼</label>
  </div>
</template>

<script>
import vInput from "./v-input.vue";
export default {
  components: {
    vInput,
  },
  props: {
    modelValue: String,
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isPasswordShown: false,
    };
  },
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    passwordType() {
      return this.isPasswordShown ? "text" : "password";
    },
  },
};
</script>

<style>
</style>