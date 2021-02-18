<template>
	<div class="date-picker">
		<div class="date-display">
			<label>date</label>
			<span @click="isPickerOn = true" :textContent="modelValue"></span>
		</div>
		<div v-if="isPickerOn" class="picker">
			<div class="head">
				<button @click="previousMonth" type="button">＜</button>
				<p :textContent="`${year}-${numToString(month)}`"></p>
				<button @click="nextMonth" type="button">＞</button>
			</div>
			<div class="body">
				<p v-for="week in weekList" class="week-list">{{ week }}</p>
				<p v-for="empty in emptyAmount"></p>
				<p @click="pickDate" v-for="date in dayOnThisMonth" class="date">
					{{ date }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import { ref, computed } from "vue";
export default {
	props: {
		modelValue: {
			type: String,
			default: "2020-2-20",
		},
	},
	emits: ["update:modelValue"],
	setup(_props, { emit }) {
		const weekList = ref(["Mon", "Tue", "Wed", "Thu", "fir", "Sat", "Sun"]);
		const isPickerOn = ref(false);
		const dayInstance = new Date();

		let date = dayInstance.getDate();
		let month = dayInstance.getMonth();
		let year = dayInstance.getFullYear();
		let emptyAmount = dayInstance.getDay();

		const dayOnThisMonth = computed(() => new Date(date, month, 0).getDate());

		const pickDate = (event) => {
			const dateString =
				event.target.textContent.length < 2
					? "0".concat(event.target.textContent)
					: event.target.textContent;

			const emitedData = `${year}-${numToString(month + 1)}-${dateString}`;
			emit("update:modelValue", emitedData);
			isPickerOn.value = false;
		};
		const nextMonth = () => {
			dayInstance = new Date(year, month + 1);
		};
		const previousMonth = () => {
			dayInstance = new Date(year, month - 1);
		};
		const numToString = (num) => {
			if (typeof num !== "number")
				throw "Number to String error: input is not a Number";
			return num < 10 ? "0".concat(num.toString()) : num.toString();
		};

		return {
			weekList,
			isPickerOn,
			date,
			month,
			year,
			emptyAmount,
			dayOnThisMonth,
			pickDate,
			nextMonth,
			previousMonth,
			numToString,
		};
	},
};
</script>
<style lang="scss">
.date-picker {
	$head-height: 40px;

	position: relative;
	p {
		text-align: center;
		margin: 0;
	}
	.date-display {
		display: flex;

		span {
			flex: 1;
			border: 1px solid black;
		}
	}
	.picker {
		position: absolute;
		height: 250px;
		width: 250px;
		transform: translateX(50%);
		background: lightskyblue;
		box-shadow: 2px 2px 5px black;
		display: flex;
		flex-direction: column;
	}
	.head {
		outline: 1px black solid;
		height: $head-height;
		display: flex;
		p {
			line-height: $head-height;
			flex: 1;
		}
		button {
			flex: 0 0 $head-height;
			background-color: transparent;
			border: none;
			&:focus {
				outline: none;
			}
		}
	}
	.body {
		flex: 1;
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		align-items: center;

		.date {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30px;
			height: 30px;
			border-radius: 50%;

			font-size: 14px;
			cursor: pointer;
			&:hover {
				background: cornflowerblue;
			}
		}
	}
	.week-list {
		font-size: 8px;
	}
}
</style>
