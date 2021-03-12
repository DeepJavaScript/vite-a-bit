<template>
  <div>
    {{ label }}:
    <span v-for="(option, index) of options" :key="index">
      <Field
        v-model="value"
        type="radio"
        :value="option.value"
        :id="option.value"
        :name="name"
        :rules="Validate"
      />
      <label :for="option.value">{{ option.label }}</label>
    </span>
    <ErrorMessage :name="name" />
  </div>
</template>

<script>
import { ErrorMessage, Field } from "vee-validate";

export default {
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    modelValue: String,
    isRequired: Boolean,
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    Validate(value) {
      if (this.isRequired) {
        if (value != null) return true;
        return "This is required";
      }
      return true;
    },
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