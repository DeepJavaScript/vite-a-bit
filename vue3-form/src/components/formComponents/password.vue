<template>
	<input v-model="value" :type="canYouSee ? 'text' : 'password'" />
	<button @click.prevent="canYouSee = !canYouSee">
		canYouSee: {{ canYouSee }}
	</button>
</template>
<script>
import { ref, computed } from "vue";
export default {
	props: {
		modelValue: String,
	},
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		const canYouSee = ref(false);
		console.log(props.modelValue);

		const value = computed({
			get: () => props.modelValue,
			set: (newValue) => emit("update:modelValue", newValue),
		});
		return {
			canYouSee,
			value,
		};
	},
};
</script>
