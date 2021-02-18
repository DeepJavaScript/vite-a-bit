<template>
	<img :src="imgSrc" class="preview" />
	<label>
		<span>picture</span>
		<input
			@change="uploadFileHandler"
			:value="modelValue"
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
			parseURL: "",
		};
	},
	computed: {
		imgSrc() {
			// 多加一個三元運算式防止跳動= =+
			return this.modelValue
				? this.parseURL != ""
					? this.parseURL
					: vueImg
				: vueImg;
		},
	},
	methods: {
		uploadFileHandler(event) {
			// 實際上要傳出去的是 input.files (???) 暫時先用 value
			this.$emit("update:modelValue", event.target.value);

			if (event.target.files && event.target.files[0]) {
				var reader = new FileReader();

				reader.addEventListener("load", (loadEvent) => {
					this.parseURL = loadEvent.target.result;
				});

				reader.readAsDataURL(event.target.files[0]);
			}
		},
	},
};
</script>
<style>
.preview {
	max-height: 100px;
}
</style>
