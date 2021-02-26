<template>
	<form class="v-form">
		<!-- <Picture v-model="picture" /> -->
		<p>
			<label for="name">name</label>
			<input v-model="name" type="text" />
			<span class="error-style">{{ nameError }}</span>
		</p>
		<p>
			<label for="age">age</label>
			<input v-model="age" type="number" />
			<span class="error-style">{{ ageError }}</span>
		</p>
		<DatePicker v-model="date" /><span class="error-style">{{ dateError }}</span>
		<p>
			<label for="time">time</label>
			<input v-model="time" type="time" />
			<span class="error-style">{{ timeError }}</span>
		</p>
		<p>
			<label>gender</label>
			<Radio v-model="gender" :groupName="'gender'" :options="genderList" />
			<span class="error-style">{{ genderError }}</span>
		</p>
		<p>
			<label>habit</label>
			<AddableCheckbox v-model:modelValue="habit" v-model:options="habitList" :groupName="'habit'" />
			<span class="error-style">{{ habitError }}</span>
		</p>
		<p>
			<label>label</label>
			<AddableTag v-model="labelList" />
			<span class="error-style">{{ labelListError }}</span>
		</p>
		<p>
			<label for="phone">phone</label>
			<input v-model="phone" type="tel" />
			<span class="error-style">{{ phoneError }}</span>
		</p>
		<p>
			<label for="address">address</label>
			<input v-model="address" type="select" />
			<span class="error-style">{{ addressError }}</span>
		</p>
		<p>
			<label for="email">email</label>
			<input v-model="email" type="email" />
			<span class="error-style">{{ emailError }}</span>
		</p>
		<p>
			<label>password</label>
			<Password v-model="password" />
			<span class="error-style">{{ passwordError }}</span>
		</p>
		<p>
			<label for="feedback">feedback</label>
			<input v-model="feedback" min="0" max="10" type="range" />
			<span :textContent="feedback"></span>
			<span class="error-style">{{ feedbackError }}</span>
		</p>
		<p>
			<label for="remark">remark</label>
			<textarea v-model="remark" cols="30" rows="3"></textarea>
			<span class="error-style">{{ remarkError }}</span>
		</p>
		<p>
			<button type="button" @click="submitHandler">submit</button>
			<button type="button" @click="resetHandler">reset</button>
			<button type="button" @click="clearHandler">clear</button>
		</p>
	</form>
</template>

<script>
import { ref } from "vue";
import DatePicker from "./formComponents/datePicker.vue";
import Radio from "./formComponents/radio.vue";
import AddableCheckbox from "./formComponents/addableCheckbox.vue";
import Password from "./formComponents/password.vue";
import AddableTag from "./formComponents/addableTag.vue";
import Picture from "./formComponents/picture.vue";
import { useForm, useField } from "vee-validate";

export default {
	emits: ["updateCurrent"],
	components: {
		DatePicker,
		Radio,
		AddableCheckbox,
		Password,
		AddableTag,
		Picture,
	},
	setup(_props, { emit }) {
		const initData = {
			name: "",
			phone: "",
			date: "",
			time: "",
			gender: "",
			habit: [],
			labelList: [],
			address: "",
			age: "",
			email: "",
			password: "",
			feedback: 5,
			remark: "",
			picture: null,
		};
		const formData = {
			name: "Lo zhang",
			phone: "090000",
			date: "1999-01-12",
			time: "05:30",
			gender: "gentle",
			habit: ["吃飯", "睡覺"],
			labelList: ["快樂", "happy", "唷~"],
			address: "深海的大鳳梨裡",
			age: "18",
			email: "",
			password: "888888888",
			feedback: 5,
			remark: "快樂",
			picture: null,
		};
		const habitList = ref(["吃飯", "睡覺", "打咚咚"]);
		const genderList = ref(["gentle", "lady", "multiple"]);
		let habitListBackup = [...habitList.value];

		function requireValidate(value) {
			console.log(value);
			if (!value) {
				return "this field is required";
			}
			return true;
		}
		const schema = {
			name: requireValidate,
			age: requireValidate,
			date: requireValidate,
			time: requireValidate,
			gender: requireValidate,
			habit: requireValidate,
			labelList: requireValidate,
			phone: requireValidate,
			address: requireValidate,
			email: requireValidate,
			password: requireValidate,
			feedback: requireValidate,
			remark: requireValidate,
		};

		const { resetForm, setValues, handleSubmit } = useForm({
			validationSchema: schema,
			initialValues: formData,
		});
		const submitHandler = handleSubmit((value) => {
			emit("updateCurrent", value);
			habitListBackup = [...habitList.value];
		});
		const resetHandler = () => {
			resetForm();
			habitList.value = [...habitListBackup];
		};
		const clearHandler = () => {
			setValues(initData);
			habitList.value = [];
		};

		const { value: name, errorMessage: nameError } = useField("name");
		const { value: age, errorMessage: ageError } = useField("age");
		const { value: date, errorMessage: dateError } = useField("date");
		const { value: time, errorMessage: timeError } = useField("time");
		const { value: gender, errorMessage: genderError } = useField("gender");
		const { value: habit, errorMessage: habitError } = useField("habit");
		const { value: labelList, errorMessage: labelListError } = useField("labelList");
		const { value: phone, errorMessage: phoneError } = useField("phone");
		const { value: address, errorMessage: addressError } = useField("address");
		const { value: email, errorMessage: emailError } = useField("email");
		const { value: password, errorMessage: passwordError } = useField("password");
		const { value: feedback, errorMessage: feedbackError } = useField("feedback");
		const { value: remark, errorMessage: remarkError } = useField("remark");

		return {
			formData,
			genderList,
			habitList,

			submitHandler,
			resetHandler,
			clearHandler,

			name,
			nameError,
			age,
			ageError,
			date,
			dateError,
			time,
			timeError,
			gender,
			genderError,
			habit,
			habitError,
			labelList,
			labelListError,
			phone,
			phoneError,
			address,
			addressError,
			email,
			emailError,
			password,
			passwordError,
			feedback,
			feedbackError,
			remark,
			remarkError,
		};
	},
};
</script>

<style lang="scss">
.v-form {
	p > label {
		text-transform: capitalize;

		&:first-child:after {
			content: ":";
			margin-right: 5px;
		}
	}
}
.error-style {
	color: red;
}
</style>
