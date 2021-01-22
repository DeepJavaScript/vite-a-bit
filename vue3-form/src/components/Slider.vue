<template>
	<div class="slider">
		<span>{{ min }}</span>
		<input
			type="range"
			class="slider-range"
			:min="min"
			:max="max"
			:value="value"
			@input="$emit('update:range', $event.target.value)"
		>
		<span>{{ max }}</span>
	</div>
</template>

<script>
export default {
	props: {
		min: {
			type: Number,
			reque: true
		},
		max: {
			type: Number,
			reque: true
		},
		value: {
			type: Number,
			reque: true
		}
	}
}
</script>

<style lang="scss" scoped>
.slider {
	display: flex;
	align-items: center;
	.slider-range {
		flex: 1 1 auto;
	}
}
</style>