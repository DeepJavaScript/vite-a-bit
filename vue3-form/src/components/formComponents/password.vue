<template>
	<input v-model="value" :type="canYouSee ? 'text' : 'password'" />
	<button @click.prevent="canYouSee = !canYouSee">
		canYouSee: {{ canYouSee }}
	</button>
</template>
<script>
export default {
	props: {
		modelValue: String,
	},
	emits: ["update:modelValue"],
	data() {
		return {
			canYouSee: false,
		};
	},
	computed: {
		value: {
			get() {
				return this.modelValue;
			},
			set(newValue) {
				this.$emit("update:modelValue", newValue);
			},
		},
	},
};
</script>
