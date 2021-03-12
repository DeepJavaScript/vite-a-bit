<template>
  <div>
    <span>{{ label }}: </span>
    <div v-for="(option, index) of options" :key="index">
      <Field
        type="checkbox"
        :value="option"
        :id="`checkbox${name}${index}`"
        :name="name"
        v-model="checkedValues"
        :rules="Validate"
      />
      <label :for="`checkbox${name}${index}`">{{ option }}</label>
    </div>
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
    modelValue: {
      type: Array,
      required: true,
    },
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
        if (value != null && value instanceof Array && value.length > 0)
          return true;
        return "At least choose one";
      }
      return true;
    },
  },
  computed: {
    checkedValues: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>