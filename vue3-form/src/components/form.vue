<template>
	<form class="v-form">
		<formPicture ref="picture" v-model="formData.picture" />
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
				v-model:modelValue="formData.habit"
				v-model:options="habitList"
				:groupName="'habit'"
			/>
		</p>
		<p>
			<label>label</label>
			<AddableTagList v-model="formData.labelList" />
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
			<label for="feedback">feedback</label>
			<input
				v-model="formData.feedback"
				id="feedback"
				min="0"
				max="10"
				type="range"
			/>
			<span :textContent="formData.feedback"></span>
		</p>
		<p>
			<label for="remark">remark</label>
			<textarea
				v-model="formData.remark"
				id="remark"
				cols="30"
				rows="3"
			></textarea>
		</p>
		<p>
			<button type="button" @click="submitHandler">submit</button>
			<button type="button" @click="resetHandler">reset</button>
			<button type="button" @click="clearHandler">clear</button>
		</p>
	</form>
</template>

<script>
import DatePicker from "./formComponents/datePicker.vue";
import Radio from "./formComponents/radio.vue";
import AddableCheckbox from "./formComponents/addableCheckbox.vue";
import PasswordInput from "./formComponents/password.vue";
import AddableTagList from "./formComponents/addableTag.vue";
import FormPicture from "./formComponents/picture.vue";

const initData = {
	name: "",
	phone: "",
	date: "",
	time: "",
	gender: "",
	habit: ["吃飯", "睡覺"],
	labelList: ["快樂", "happy", "唷~"],
	address: "",
	age: "",
	email: "",
	password: "",
	feedback: 5,
	remark: "",
	picture: null,
};

export default {
	emits: ["updateCurrent"],
	components: {
		DatePicker,
		Radio,
		AddableCheckbox,
		PasswordInput,
		AddableTagList,
		FormPicture,
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
				labelList: ["快樂", "happy", "唷~"],
				address: "深海的大鳳梨裡",
				age: "18",
				email: "",
				password: "888888888",
				feedback: 5,
				remark: "快樂",
				picture: null,
			},
			backup: {},
			genderList: ["gentle", "lady", "multiple"],
			habitList: ["吃飯", "睡覺", "打咚咚"],
			habitListBackup: [],
		};
	},
	created() {
		this.backup = { ...this.formData };
		this.habitListBackup = [...this.habitList];
	},
	methods: {
		submitHandler() {
			this.$emit("updateCurrent", this.formData);
			this.backup = { ...this.formData };
			this.habitListBackup = [...this.habitList];
		},
		resetHandler() {
			this.formData = { ...this.backup };
			this.habitList = [...this.habitListBackup];
			this.$refs.picture.reset();
		},
		clearHandler() {
			this.formData = { ...initData };
			this.$refs.picture.reset();
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
	p > label {
		text-transform: capitalize;

		&:first-child:after {
			content: ":";
			margin-right: 5px;
		}
	}
}
</style>
