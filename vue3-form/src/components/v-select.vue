<template>
  <div class="v-select">
    <label>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
      <Field v-bind="$attrs" v-slot="{ field }">
        <select
          v-bind="{ ...field, ...$attrs }"
          name="location"
          :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        >
          <slot></slot>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </Field>
    </label>
    <div>
      <ErrorMessage class="error-message" v-bind="$attrs"></ErrorMessage>
    </div>
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
.error-message {
  color: red;
}
</style>
