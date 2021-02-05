<template>
  <div
    class="form-check"
    v-for="(option, index) in formOptions"
    :key="option.value"
  >
    <input
      type="checkbox"
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
  name: 'FormCheckboxGroup',
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

    const formOptions = computed(() => {
      return props.options.map(item => {
        return { text: item, value: item };
      });
    });

    return {
      value,
      formOptions
    };
  }
};
</script>

<style lang="scss" scoped></style>
