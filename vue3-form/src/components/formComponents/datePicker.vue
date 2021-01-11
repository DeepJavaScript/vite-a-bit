<template>
	<div class="date-picker">
		<div class="date-display">
			<label>date</label>
			<span @click="isPickerOn = true" :textContent="dateValue"></span>
		</div>
		<div v-if="isPickerOn" class="picker">
			<div class="head">
				<button @click="previousMonth" type="button">＜</button>
				<p :textContent="`${year}-${numToString(month + 1)}`"></p>
				<button @click="nextMonth" type="button">＞</button>
			</div>
			<div class="body">
				<p v-for="week in weekList" class="week-list">{{ week }}</p>
				<p v-for="empty in emptyAmout"></p>
				<p @click="pickDate" v-for="date in dayOnThisMonth" class="date">
					{{ date }}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		modelValue: {
			type: String,
			default: "2020-2-20",
		},
	},
	emits: ["update:modelValue"],
	data() {
		return {
			weekList: ["Mon", "Tue", "Wed", "Thu", "fir", "Sat", "Sun"],
			isPickerOn: false,
			dayInstance: new Date(),
			dateValue: this.modelValue,
		};
	},
	computed: {
		date() {
			return this.dayInstance.getDate();
		},
		month() {
			return this.dayInstance.getMonth();
		},
		year() {
			return this.dayInstance.getFullYear();
		},
		emptyAmout() {
			return this.dayInstance.getDay();
		},
		dayOnThisMonth() {
			return new Date(this.date, this.month, 0).getDate();
		},
	},
	methods: {
		pickDate(event) {
			const dateString =
				event.target.textContent.length < 2
					? "0".concat(event.target.textContent)
					: event.target.textContent;
			this.dateValue = `${this.year}-${this.numToString(
				this.month + 1
			)}-${dateString}`;
			this.$emit("update:modelValue", this.dateValue);
			this.isPickerOn = false;
		},
		nextMonth() {
			this.dayInstance = new Date(this.year, this.month + 1);
		},
		previousMonth() {
			this.dayInstance = new Date(this.year, this.month - 1);
		},
		numToString(num) {
			if (typeof num !== "number")
				throw "Number to String error: input is not a Number";
			return num < 10 ? "0".concat(num.toString()) : num.toString();
		},
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
