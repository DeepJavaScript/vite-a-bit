<template>
	<div>
		<input
			type="file"
			multiple
			accept=".png,.jpg,.jpeg"
			@change="handleFiles($event)"
		>
		<div v-if="fileList.length > 0">
			<ul
				v-for="(file, index) in fileList"
				:key="index"
			>
				<li>
					檔名：{{ file.name }} <br/>
					容量：{{ file.size }} KB
					<img :src="file.url">
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			fileList: []
		}
	},
	methods: {
		sizeToKB(value) {
			const KB = value / 1024
			return KB.toFixed(2)
		},
    handleFiles(event) {
			this.fileList = [...event.target.files]
			this.fileList = this.fileList.map(file => {
				return {
					name: file.name,
					size: this.sizeToKB(file.size),
					type: file.type,
					url: URL.createObjectURL(file)
				}
			})
			this.$emit('update:files', this.fileList)
    },
	},
}
</script>

<style lang="scss" scoped>

</style>