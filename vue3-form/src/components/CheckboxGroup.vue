<template>
	<div>
		<div class="checkbox-group">
			<div
				v-for="item in options"
				:key="item.value"
				class="checkbox-item"
			>
				<input
					type="checkbox"
					:name="groupName"
					:id="item.value"
					:value="item.value"
					@input="handler"
				>
				<label
					:for="item.value"
				>{{ item.text }}</label> 
			</div>
		</div>
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
	data() {
		return {
			selected: []
		}
	},
	methods: {
		handler(event) {
			const selectedValue = event.target.value
			if(event.target.checked) {
				const item = this.options.find(item => {
					return item.value === selectedValue
				}) 
				this.selected = [
					...this.selected,
					item
				]
				this.$emit('update:Checked', this.selected)
			}else {
				const newSelected = this.selected.filter(item => {
					return item.value !== selectedValue
				}) 
				this.selected = [
					...newSelected
				]
				this.$emit('update:Checked', this.selected)

			}
		}
	},
}
</script>

<style lang="scss" scoped>
.checkbox-group {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	.checkbox-item {
		label {
			flex: 0 0 auto;
		}
	}
	.checkbox-item:not(:last-child) {
		label {
			margin-right: 10px;
		}
	}
}
</style>