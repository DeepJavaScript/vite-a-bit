<template>
  <div class="v-input">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <input
        v-bind="$attrs"
        :value="modelValue"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$attrs.type === 'range'">{{ modelValue }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
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
