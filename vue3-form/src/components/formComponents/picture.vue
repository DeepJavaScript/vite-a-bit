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
import { ref, computed } from "vue";
import vueImg from "/src/assets/logo.png";
export default {
	props: ["modelValue"],
	emits: ["update:modelValue"],
	setup(props, { emit }) {
		const parseURL = ref("");
		const imgSrc = computed(() => (props.modelValue ? parseURL.value : vueImg));
		const uploadFileHandler = (event) => {
			// 實際上要傳出去的是 input.files (???) 暫時先用 value
			emit("update:modelValue", event.target.value);

			if (event.target.files && event.target.files[0]) {
				var reader = new FileReader();

				reader.addEventListener("load", (loadEvent) => {
					parseURL.value = loadEvent.target.result;
				});

				reader.readAsDataURL(event.target.files[0]);
			}
		};

		return {
			parseURL,
			imgSrc,
			uploadFileHandler,
		};
	},
};
</script>
<style>
.preview {
	max-height: 100px;
}
</style>
