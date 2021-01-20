<template>
	<div class="dynamic-checkbox">
		<input
			class="create-checkbox-item"
			type="text"
			ref="createCheckboxItem"
			@change.enter="handler"
			placeholder="Enter 後即可新增"
		>
		<CheckboxGroup
			:groupName="groupName"
			:options="dynamicOptions"
			@updateSelected="$emit('updateSelected', $event)"
		></CheckboxGroup>
	</div>
</template>

<script>
import CheckboxGroup from '../components/CheckboxGroup.vue'
export default {
	components: {
    CheckboxGroup
	},
	props: {
		groupName: {
			type: String,
			requery: true
		},
		options: {
			type: Array,
			default: () => []
		},
	},
	mounted () {
		this.dynamicOptions = [...this.options]
	},
	data() {
		return {
			dynamicOptions: []
		}
	},
	methods: {
		handler(event) {
			if(!event.target.value) return

			const newCheckboxItem = {
				text: event.target.value,
				value: event.target.value
			}
			this.dynamicOptions = [
				...this.dynamicOptions,
				newCheckboxItem
			]
			this.$refs.createCheckboxItem.value = null
		},
	}
}
</script>

<style lang="scss" scoped>
.dynamic-checkbox {
	.create-checkbox-item {
		width: 100%;
		margin-bottom: 5px;
	}
}

</style>