<template>
	<vue3Form @updateCurrent="updateCurrent" />
	<div>
		<h1>current data display</h1>
		<pre :textContent="displayData"></pre>
	</div>
</template>

<script>
// import { reactive } from "vue";
import vue3Form from "./components/form.vue";
// import currentDataDisplay from "./components/currentDataDisplay.vue";

export default {
	data() {
		return {
			currentData: {},
		};
	},
	computed: {
		displayData() {
			return JSON.stringify(this.currentData).replace(
				new RegExp(",", "g"),
				",\n"
			);
		},
	},
	components: {
		vue3Form,
	},
	methods: {
		updateCurrent(emitedData) {
			this.currentData = { ...emitedData };
		},
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
