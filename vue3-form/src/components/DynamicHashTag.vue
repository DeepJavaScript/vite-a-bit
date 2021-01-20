<template>
	<div class="dynamic-hashTags">
		<input
			class="create-hash-tags-item"
			type="text"
			ref="createHashTagsItem"
			@change.enter="handler"
			placeholder="Enter 後即可新增"
		>
			<!-- @keyup.self.enter="handler" -->
		<!-- @change.stop.enter="handler" -->
		<!-- @change.enter.stop="handler" -->
		<!-- @keyup.enter="handler" -->
		<div class="hashtag-group">
			<div
				v-for="item in dynamicOptions"
				:key="item.value"
				class="hashtag-item"
			>
				<button
					@click.self="removeHashTag(item)"
				>
					{{ item.text }}
					<span>x</span>
				</button>
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
	mounted () {
		this.dynamicOptions = [...this.options]
		this.$emit('updateSelected', this.dynamicOptions)
	},
	data() {
		return {
			dynamicOptions: []
		}
	},
	methods: {
		handler(event) {
			if(!event.target.value) return
			const newHashTagsItem = {
				text: event.target.value,
				value: event.target.value
			}
			this.dynamicOptions = [
				...this.dynamicOptions,
				newHashTagsItem
			]
			console.log(this.dynamicOptions);
			this.$emit('updateSelected', this.dynamicOptions)
			this.$refs.createHashTagsItem.value = null
		},
		removeHashTag(removeItem) {
			console.log('>>>removeHashTag',removeItem);
			this.dynamicOptions = this.dynamicOptions.filter(item => {
				return item.value !== removeItem.value
			})
			this.$emit('updateSelected', this.dynamicOptions)
		}
	},
}
</script>

<style lang="scss" scoped>
.dynamic-hashTags {
	display: flex;
	flex-direction: column;
	.create-hash-tags-item {
		width: 100%;
		margin-bottom: 10px;
	}
	.hashtag-group {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.hashtag-item:not(:last-child) {
			margin-right: 10px;
		}
	}
}
</style>