<template>
	<img :src="fileSouce" class="preview" />
	<label>
		<span>picture</span>
		<input
			@change="uploadFileHandler"
			type="file"
			accept="image/png, image/jpeg"
		/>
	</label>
</template>

<script>
import vueImg from "/src/assets/logo.png";
export default {
	props: ["modelValue"],
	emits: ["update:modelValue"],
	data() {
		return {
			fileSouce: vueImg,
		};
	},
	methods: {
		uploadFileHandler(event) {
			// 實際上要傳出去的是 input.files (???) 暫時先用 value
			this.$emit("update:modelValue", event.target.value);

			if (event.target.files && event.target.files[0]) {
				var reader = new FileReader();

				reader.addEventListener("load", (loadEvent) => {
					this.fileSouce = loadEvent.target.result;
				});

				reader.readAsDataURL(event.target.files[0]);
			}
		},
		reset() {
			this.fileSouce = vueImg;
		},
	},
};
</script>
<style>
.preview {
	max-height: 100px;
}
</style>
