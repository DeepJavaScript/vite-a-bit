<template>
  <div>
    <label :for="name">{{ label }}: </label>
    <Field
      :type="inputType"
      :id="name"
      :name="name"
      :value="modelValue"
      :label="label"
      v-bind="$attrs"
      :rules="Validate"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
    modelValue: [String, Number],
    isRequired: Boolean,
    inputType: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    Validate(value) {
      if (this.isRequired) {
        if (value != null && (value || value.trim())) return true;
        return "This is required";
      }
      return true;
    },
  },
};
</script>
