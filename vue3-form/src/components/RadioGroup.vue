<template>
	<div class="radio-group">
		<div
			v-for="item in options"
			:key="item.value"
			class="radio-item"
		>
			<input
				type="radio"
				:name="groupName"
				:id="item.value"
				:value="item.value"
				@input="$emit('updateSelected', $event.target.value)"
			>
			<label
				:for="item.value"
			>{{ item.text }}</label> 
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
}
</script>

<style lang="scss" scoped>
.radio-group {
  display: flex;
	align-items: center;
	.radio-item {
		label {
			flex: 0 0 auto;
		}
	}
	.radio-item:not(:last-child) {
		label {
			margin-right: 10px;
		}
	}
}
</style>