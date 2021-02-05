<template>
  <div
    class="form-check"
    v-for="(option, index) in formOptions"
    :key="option.value"
  >
    <input
      type="radio"
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
import { computed, toRefs } from 'vue';

import { generateFormOptions } from '@/composables/useForm';

export default {
  name: 'FormRadioGroup',
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

    const { options } = toRefs(props);
    const formOptions = generateFormOptions(options);

    return {
      value,
      formOptions
    };
  }
};
</script>

<style lang="scss" scoped></style>
