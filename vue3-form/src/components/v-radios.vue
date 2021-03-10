<template>
  <div>
		{{ label }}:
    <div v-for="(option, index) of options" :key="index">
      <input
        type="radio"
        :id="option.value"
        :value="option.value"
				:name="name"
        @change="$emit('update:modelValue', $event.target.value)"
      />
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
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
};
</script>