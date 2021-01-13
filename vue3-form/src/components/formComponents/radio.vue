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
	emits: {
		"update:modelValue": (eventTargetValue) => {
			console.log('跑驗證 fuction 唷')
			if ( eventTargetValue === 'gentle') {
				return true;
			}
			else return false;
		},
	},
};
</script>
