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
	setup(props, { emit }) {
		const addNewOption = (event) => {
			emit("update:modelValue", [...props.modelValue, event.target.value]);
			event.target.value = "";
		};
		const deleteOption = (tag) => {
			emit(
				"update:modelValue",
				props.modelValue.filter((item) => item != tag)
			);
		};

		return {
			addNewOption,
			deleteOption,
		};
	},
};
</script>
