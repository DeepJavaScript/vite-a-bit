<template>
  <div>
    <label :for="name">{{ label }}: </label>
    <input
      :value="modelValue"
      :type="inputType"
      :id="name"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
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
  data() {
    return {};
  },
};
</script>
