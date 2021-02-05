<template>
  <div class="form-check">
    <input
      type="checkbox"
      :id="$attrs.id"
      :value="$attrs.value"
      v-model="value"
    />
    <label :for="$attrs.id">
      <slot />
    </label>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'FormCheckbox',
  props: {
    modelValue: {}
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
