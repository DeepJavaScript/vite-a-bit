<template>
	<span v-for="(tag, index) in modelValue" :key="index">
		<label>{{ tag }}</label>
		<button @click.prevent="deleteOption(tag)">X</button>
	</span>
	<input @keydown.prevent.enter="addNewOption" type="text" />
</template>
<script>
export default {
	props: {
		modelValue: Array,
	},
	emits: ["update:modelValue"],
	methods: {
		addNewOption(event) {
			this.$emit("update:modelValue", [...this.modelValue, event.target.value]);
			event.target.value = "";
		},
		deleteOption(tag) {
			this.$emit(
				"update:modelValue",
				this.modelValue.filter((item) => item != tag)
			);
		},
	},
};
</script>
