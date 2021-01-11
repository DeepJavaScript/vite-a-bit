<template>
	<label v-for="option in options">
		<input
			@change="this.$emit('update:modelValue', $event.target.value)"
			:name="groupName"
			:value="option"
			:checked="modelValue === option"
			type="radio"
		/>
		<span>{{ option }}</span>
	</label>
</template>
<script>
export default {
	props: {
		modelValue: String,
		groupName: String,
		options: Object,
	},
	emits: ["update:modelValue"],
};
</script>
