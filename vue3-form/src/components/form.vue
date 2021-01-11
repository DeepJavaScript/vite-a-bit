<template>
	<form class="v-form">
		<!-- <formPicture v-model="formData.picture" /> -->
		<p>
			<label for="name">name</label>
			<input v-model="formData.name" id="name" type="text" />
		</p>
		<p>
			<label for="age">age</label>
			<input v-model="formData.age" id="age" type="number" />
		</p>
			<DatePicker v-model="formData.date" />
		<p>
			<label for="time">time</label>
			<input v-model="formData.time" id="time" type="time" />
		</p>
		<p>
			<label>gender</label>
			<Radio
				v-model="formData.gender"
				:groupName="'gender'"
				:options="genderList"
			/>
		</p>
		<p>
			<label>habit</label>
			<AddableCheckbox
				v-model="formData.habit"
				@updateOption="habitList = $event"
				:options="habitList"
				:groupName="'habit'"
			/>
		</p>
		<p>
			<label for="phone">phone</label>
			<input v-model="formData.phone" id="phone" type="tel" />
		</p>
		<p>
			<label for="address">address</label>
			<input v-model="formData.address" id="address" type="select" />
		</p>
		<p>
			<label for="email">email</label>
			<input v-model="formData.email" id="email" type="email" />
		</p>
		<p>
			<label>password</label>
			<PasswordInput v-model="formData.password" />
		</p>
		<p>
			<label for="feelback">feelback</label>
			<input v-model="formData.feelback" id="feelback" type="range" />
		</p>
		<p>
			<label for="remark">remark</label>
			<textarea
				v-model="formData.remark"
				id="remark"
				cols="30"
				rows="10"
			></textarea>
		</p>
		<p>
			<input @click.prevent="submitHandler" id="submit" type="submit" />
			<input id="reset" type="reset" />
		</p>
	</form>
</template>

<script>
import DatePicker from "./formComponents/datePicker.vue";
import Radio from "./formComponents/radio.vue";
import AddableCheckbox from "./formComponents/addableCheckbox.vue";
import PasswordInput from "./formComponents/password.vue";
// import formPicture from './formComponents/picture.vue';

export default {
	emits: ["updateCurrent"],
	components: {
		DatePicker,
		Radio,
		AddableCheckbox,
		PasswordInput,
	},
	data() {
		return {
			formData: {
				name: "Lo zhang",
				phone: "090000",
				date: "1999-01-12",
				time: "05:30",
				gender: "gentle",
				habit: ["吃飯", "睡覺"],
				address: "",
				age: "18",
				email: "",
				password: "888888888",
				feelback: "",
				remark: "",
				picture: "",
			},
			genderList: ["gentle", "lady", "multiple"],
			habitList: ["吃飯", "睡覺", "打咚咚"],
		};
	},
	methods: {
		submitHandler() {
			this.$emit("updateCurrent", this.formData);
		},
	},
	watch: {
		formData: {
			handler() {
				// console.table(this.formData);
			},
			deep: true,
		},
	},
};
</script>

<style lang="scss">
.v-form {
	label {
		text-transform: capitalize;

		&:first-child:after {
			content: ":";
			margin-right: 5px;
		}
	}
}
</style>
