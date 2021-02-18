<template>
	<span v-for="(option, index) in options" :key="index">
		<input
			@change="checkHandler"
			:checked="modelValue.includes(option)"
			:name="groupName"
			:value="option"
			type="checkbox"
		/>
		<label>{{ option }}</label>
		<button type="button" @click="deleteOption(option)">X</button>
	</span>
	<!-- keydown.enter 會觸發 上面的 button @click.... -->
	<input @keydown.enter="addNewOption" type="text" />
</template>
<script>
export default {
	props: {
		modelValue: Array,
		options: Array,
		groupName: String,
	},
	emits: ["update:modelValue", "update:options"],
	setup(props, { emit }) {
		const checkHandler = (event) => {
			emit(
				"update:modelValue",
				event.target.checked
					? [...props.modelValue, event.target.value]
					: props.modelValue.filter((item) => item != event.target.value)
			);
		};
		const addNewOption = (event) => {
			emit("update:options", [...props.options, event.target.value]);
			emit("update:modelValue", [...props.modelValue, event.target.value]);
			event.target.value = "";
		};
		const deleteOption = (option) => {
			emit(
				"update:options",
				props.options.filter((item) => item != option)
			);
			if (props.modelValue.includes(option))
				emit(
					"update:modelValue",
					props.modelValue.filter((item) => item != option)
				);
		};

		return {
			checkHandler,
			addNewOption,
			deleteOption,
		};
	},
};
</script>
