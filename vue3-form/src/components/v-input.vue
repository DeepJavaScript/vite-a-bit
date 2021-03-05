<template>
  <div class="v-input">
    <label>
      <div class="label">
        <span class="label-required" :class="{ required: required }">*</span
        >{{ label }}
      </div>
      <Field
        as="input"
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="$attrs.type === 'range'">{{ modelValue }}</span>
      <div>
        <ErrorMessage class="error-message" v-bind="$attrs"></ErrorMessage>
      </div>
    </label>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  inheritAttrs: false,
  components: {
    Field,
    ErrorMessage,
  },
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
  // methods: {
  // },
};
</script>

<style lang="scss" scoped>
.v-input {
  margin: 0.5em 0;
}
.label-required {
  opacity: 0;
}
.label {
  display: block;
}
.error-message {
  color: red;
}

.required {
  color: red;
  opacity: 1;
}
</style>
