<template>
  <div
    class="form-check"
    :class="$attrs.class"
    v-for="(option, index) in formOptions"
    :key="option.value"
  >
    <input
      type="checkbox"
      :id="`${id}-options-${index}`"
      :value="option.value"
      v-model="value"
    />
    <label :for="`${id}-options-${index}`">
      {{ option.text }}
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'FormCheckboxGroup',
  props: {
    id: {
      type: String,
      required: true
    },
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
