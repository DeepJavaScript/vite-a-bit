<template>
  <div class="v-select">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <select
        name="location"
        :value="modelValue"
        :required="required"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <slot></slot>
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
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
select {
  width: 11em;
}
</style>
