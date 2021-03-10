<template>
  <div>
		<label :for="name">{{ label }}: </label>
    <select :value="modelValue" :id="name" :name="name" @change="$emit('update:modelValue', $event.target.value)">
      <option value="" disabled>{{ defaultOptionLabel }}</option>
      <option
        v-for="(option, index) of options"
        :key="index"
        :value="option.value ?? option.label ?? option"
      >
        {{ option.label ?? option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    options: {
      type: Array,
      required: true,
    },
		label: {
			type: String,
			required: true,
		},
    defaultOptionLabel: {
      type: String,
      default: "請選擇",
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>