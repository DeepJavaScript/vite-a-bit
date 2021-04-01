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
import { ref, computed } from 'vue';
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
  setup() {
    const isPasswordShown = ref(false);
    const passwordType = computed(() => {
      return isPasswordShown.value ? "text" : "password";
    })

    return { isPasswordShown, passwordType };
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
  },
};
</script>

<style>
</style>