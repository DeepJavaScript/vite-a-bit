<template>
  <div
    class="form-check"
    v-for="(option, index) in options"
    :key="option.value"
  >
    <input
      type="radio"
      :id="`${$attrs.id}-options-${index}`"
      :value="option.value"
      v-model="value"
    />
    <label :for="`${$attrs.id}-options-${index}`">
      {{ option.text }}
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'FormRadioGroup',
  props: {
    modelValue: {},
    options: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set(value) {
        emit('update:modelValue', value);
      }
    });

    return {
      value
    };
  }
};
</script>

<style lang="scss" scoped></style>
