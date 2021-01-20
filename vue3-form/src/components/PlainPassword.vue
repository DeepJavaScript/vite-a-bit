<template>
	<div>
		<input
			:type="inputType"
			:value="value"
			@input="$emit('update:psaaword', $event.target.value)"
		>
		<button
			v-if="inputType === 'password'"
			type="button"
			@click="inputType = 'text'"
		>show</button>
		<button
			v-else
			type="button"
			@click="inputType = 'password'"
		>close</button>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			requey: true
		},
	},
	data() {
		return {
			inputType: 'password'
		}
	}
}
</script>

<style lang="scss" scoped>

</style>