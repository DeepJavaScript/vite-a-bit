<template>
	<input
		@input="$emit('update:modelValue', $event.target.value)"
		:value="modelValue"
		:type="canYouSee ? 'text' : 'password'"
	/>
	<button type="button" @click="canYouSee = !canYouSee">
		canYouSee: {{ canYouSee }}
	</button>
</template>
<script>
import { ref } from "vue";
export default {
	props: {
		modelValue: String,
	},
	emits: ["update:modelValue"],
	setup() {
		const canYouSee = ref(false);
		return {
			canYouSee,
		};
	},
};
</script>
