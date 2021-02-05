<template>
  <select
    :id="id"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option :value="null" disabled>請選擇</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    id: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    modelValue: {}
  },
  emits: ['update:modelValue']
};
</script>

<style lang="scss" scoped></style>
