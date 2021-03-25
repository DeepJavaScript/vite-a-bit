<template>
  <div>
    <span>{{ label }}: </span>
    <div v-for="(option, index) of options" :key="index">
      <input
        type="checkbox"
        :value="option"
        :id="`checkbox${name}${index}`"
        :name="name"
        v-model="checkedValues"
      />
      <label :for="`checkbox${name}${index}`">{{ option }}</label>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    modelValue: {
      type: Array,
      required: true,
    },
    // isRequired: Boolean,
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