<template>
  <fieldset class="v-radio">
    <legend>
      <span class="label-required" :class="{ required: required }">*</span>
      {{ label }}
    </legend>
    <label :key="index" v-for="(item, index) in options">
      <Field v-bind="$attrs" v-slot="{ field }">
        <input v-bind="field" type="radio" :value="item" v-model="value" />
      </Field>
      {{ item }}
    </label>
    <div>
      <ErrorMessage class="error-message" v-bind="$attrs"></ErrorMessage>
    </div>
  </fieldset>
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
      default: () => [
        {
          label: "",
          value: null,
        },
      ],
    },
    modelValue: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    value: {
      set(new_value) {
        this.$emit("update:modelValue", new_value);
      },
      get() {
        return this.modelValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.label-required {
  opacity: 0;
}
.error-message {
  color: red;
}
.required {
  color: red;
  opacity: 1;
}
</style>
