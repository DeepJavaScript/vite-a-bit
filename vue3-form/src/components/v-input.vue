<template>
  <div>
    <label :for="name">{{ label }}: </label>
    <input
      :type="inputType"
      :id="name"
      :name="name"
      :value="modelValue"
      :label="label"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: {
    modelValue: [String, Number],
    // isRequired: Boolean,
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
};
</script>
