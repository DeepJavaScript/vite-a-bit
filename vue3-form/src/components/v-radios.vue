<template>
  <div>
    {{ label }}:
    <span v-for="(option, index) of options" :key="index">
      <input
        v-model="value"
        type="radio"
        :value="option.value"
        :id="option.value"
        :name="name"
      />
      <label :for="option.value">{{ option.label }}</label>
    </span>
  </div>
</template>

<script>

export default {
  props: {
    modelValue: String,
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