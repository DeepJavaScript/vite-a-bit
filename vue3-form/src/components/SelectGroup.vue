<template>
	<div class="select-group">
		<select
			:name="groupName"
			@change="handler"
		>
			<option disabled value="volvo">請選擇</option>
			<template
				v-for="item in options"
				:key="item.value"
			>
				<option
					:value="item.value"
				>{{ item.text }}</option>
			</template>
		</select>
	</div>
</template>

<script>
export default {
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
	methods: {
		handler(event) {
			const selectedValue = event.target.value
			const selectedItem = this.options.find(item => {
				return item.value === selectedValue
			}) 
			this.$emit('update:selected', selectedItem)
		}
	},
}
</script>

<style lang="scss" scoped>
.select-group {
	select {
    width: 100%;
	}
}
</style>