<template>
  <h1>表單</h1>
  <Form id="form" action="" @submit.prevent="onSubmit" @reset.prevent="onReset">
    <VPhoto
      label="上傳照片"
      type="file"
      name="photo"
      accept=".jpg,.png"
      v-model="user.photo"
    ></VPhoto>
    <VInput
      label="姓名"
      placeholder="Chris"
      type="text"
      name="name"
      v-model="user.name"
      :rules="isRequired"
      required
    ></VInput>
    <VInput
      label="電話"
      placeholder="0921026229"
      type="tel"
      name="phone"
      required
      v-model="user.phone"
    ></VInput>
    <VInput label="日期" type="date" name="date" v-model="user.date"></VInput>
    <VInput label="時間" type="time" name="time" v-model="user.time"></VInput>
    <VRadio
      label="性別"
      :options="optionsGender"
      v-model="user.gender"
    ></VRadio>
    <VAddText
      :options="optionsHobbies"
      required
      text="興趣+"
      v-slot="{ allOptions }"
    >
      <VCheckbox
        label="興趣"
        :options="allOptions"
        name="hobbies"
        v-model="user.hobbies"
      ></VCheckbox>
    </VAddText>
    <VAddText v-model:options="user.labels" name="labels" text="標籤+">
      <VLabel label="標籤" v-model="user.labels"></VLabel>
    </VAddText>
    <VSelect label="棲息地" :options="optionsLocation" v-model="user.location">
      <option disabled :value="null">--</option>
    </VSelect>
    <VInput
      label="年齡"
      placeholder="18"
      type="number"
      name="age"
      min="0"
      v-model.number="user.age"
      required
    ></VInput>
    <VInput
      label="e-mail"
      placeholder="chris@goodideas-studio.com"
      type="email"
      name="email"
      autocomplete="username"
      v-model="user.email"
    ></VInput>
    <VPassword label="密碼" v-model="user.password"></VPassword>
    <VInput
      label="最近心情"
      type="range"
      name="range"
      min="1"
      step="0.5"
      max="5"
      v-model="user.range"
    ></VInput>
    <div>
      <label> 備註 </label><br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        v-model="user.multi_line_text"
      ></textarea>
    </div>
    <input type="submit" value="submit" />
    <input type="reset" value="reset" />
  </Form>
</template>

<script>
import VPhoto from "../components/v-photo.vue";
import VInput from "../components/v-input.vue";
import VRadio from "../components/v-radio.vue";
import VCheckbox from "../components/v-checkbox.vue";
import VAddText from "../components/v-add-text.vue";
import VLabel from "../components/v-label.vue";
import VSelect from "../components/v-select.vue";
import VPassword from "../components/v-password.vue";
import { Form } from "vee-validate";
// import { email, password } from "./utility/rules";

export default {
  components: {
    VPhoto,
    VInput,
    VRadio,
    VCheckbox,
    VLabel,
    VAddText,
    VSelect,
    VPassword,
    Form,
  },
  data() {
    return {
      user: {},
      optionsHobbies: ["打 code", "看書", "跳 swing"],
      optionslabels: [],
      // simpleSchema: { email, password },
    };
  },
  created() {
    this.onReset();
  },
  computed: {
    optionsGender() {
      return ["女", "男", "中"];
    },
    // optionsHobby() {
    //   return ["打 code", "看書", "跳 swing"];
    // },
    optionsLocation() {
      return ["高雄", "台南", "府城"];
    },
    initUser() {
      return {
        photo: { name: "" },
        name: "",
        phone: "",
        date: "2021-01-08",
        time: "23:17:55",
        gender: "",
        hobbies: [],
        labels: [],
        location: null,
        age: 0,
        email: null,
        password: "",
        range: 1,
        multi_line_text: null,
        other: null,
      };
    },
  },
  methods: {
    // Validator function
    isRequired(value) {
      console.log(value);
      if (!value) {
        return "This field is required";
      }
      return true;
    },
    onSubmit() {
      console.lgo(this.user);
    },
    onReset() {
      this.user = {
        ...this.initUser,
      };
    },
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
