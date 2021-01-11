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
			<button @click.prevent="deleteOption(option)">X</button>
		</span>
	<!-- keydown.enter 會觸發 上面的 button @click.... -->
	<input @keydown.prevent.enter="addNewOption" type="text" />
</template>
<script>
export default {
	props: {
		modelValue: Array,
		options: Array,
		groupName: String,
	},
	emits: ["update:modelValue", "updateOption"],
	methods: {
		checkHandler(event) {
			this.$emit(
				"update:modelValue",
				event.target.checked
					? [...this.modelValue, event.target.value]
					: this.modelValue.filter((item) => item != event.target.value)
			);
		},
		addNewOption(event) {
			this.$emit("updateOption", [...this.options, event.target.value]);
			event.target.value = '';
		},
		deleteOption(option) {
			this.$emit(
				"updateOption",
				this.options.filter((item) => item != option)
			);
		},
	},
};
</script>
