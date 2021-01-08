<template>
  <div class="v-input">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <input
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
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
