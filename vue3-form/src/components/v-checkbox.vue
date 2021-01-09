<template>
  <div class="v-checkbox">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}</label
    >
    <span :key="index" v-for="(item, index) in options">
      <label
        ><input type="checkbox" :value="item.toString()" v-model="value" />{{
          item
        }}</label
      >
    </span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      typye: Array,
      default: () => [
        {
          label: '',
          value: null
        }
      ]
    },
    modelValue: {
      type: Array,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    value: {
      set(new_value) {
        this.$emit('update:modelValue', new_value);
      },
      get() {
        return this.modelValue;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.label-required {
  opacity: 0;
}
.required {
  color: red;
  opacity: 1;
}
</style>
