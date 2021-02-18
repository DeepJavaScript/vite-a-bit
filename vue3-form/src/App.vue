<template>
	<vue3Form @updateCurrent="updateCurrent" />
	<div>
		<h1>current data display</h1>
		<pre :textContent="displayData"></pre>
	</div>
</template>

<script>
import { ref, computed } from "vue";
import vue3Form from "./components/form.vue";
export default {
	setup() {
		const currentData = ref({});
		const displayData = computed(() =>
			JSON.stringify(currentData.value).replace(new RegExp(",", "g"), ",\n")
		);
		const updateCurrent = (emitedData) => {
			currentData.value = { ...emitedData };
		};

		return {
			currentData,
			displayData,
			updateCurrent,
		};
	},
	components: {
		vue3Form,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;

	display: flex;
}
</style>
