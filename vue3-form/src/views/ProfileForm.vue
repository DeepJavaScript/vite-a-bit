<template>
  <h1>表單</h1>
  <div class="right">
    <pre>{{ user }}</pre>
  </div>
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
      :rules="isRequired"
      v-model="user.phone"
    ></VInput>
    <VInput
      label="日期"
      type="date"
      name="date"
      :rules="isRequired"
      v-model="user.date"
    ></VInput>
    <VInput
      label="時間"
      type="time"
      name="time"
      :rules="isRequired"
      v-model="user.time"
    ></VInput>
    <VRadio
      label="性別"
      name="gender"
      :options="optionsGender"
      :rules="isRequired"
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
        :rules="isRequired"
      ></VCheckbox>
    </VAddText>
    <VAddText v-model:options="user.labels" name="labels" text="標籤+">
      <VLabel label="標籤" v-model="user.labels"></VLabel>
    </VAddText>
    <VSelect
      name="location"
      label="棲息地"
      :options="optionsLocation"
      :rules="isRequired"
      v-model="user.location"
    >
      <option disabled :value="null">--</option>
    </VSelect>
    <VInput
      label="年齡"
      placeholder="18"
      type="number"
      name="age"
      min="0"
      v-model.number="user.age"
      :rules="isRequired"
    ></VInput>
    <VInput
      label="e-mail"
      placeholder="chris@goodideas-studio.com"
      type="email"
      name="email"
      autocomplete="username"
      v-model="user.email"
      :rules="isRequired"
    ></VInput>
    <VPassword
      label="密碼"
      v-model="user.password"
      :rules="isRequired"
    ></VPassword>
    <VInput
      label="最近心情"
      type="range"
      name="range"
      min="1"
      step="0.5"
      max="5"
      v-model="user.range"
      :rules="isRequired"
    ></VInput>
    <div>
      <label> 備註 </label><br />
      <Field
        name="comment"
        v-model="user.multi_line_text"
        :rules="isRequired"
        v-slot="{ field }"
      >
        <textarea
          v-bind="{ ...field, ...$attrs }"
          id=""
          cols="30"
          rows="3"
          required
        ></textarea>
      </Field>
      <div>
        <ErrorMessage name="comment" class="error-message"></ErrorMessage>
      </div>
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
import { Form, Field, ErrorMessage } from "vee-validate";
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
    Field,
    ErrorMessage,
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
      if (!value) {
        return "不可以跳過";
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
.right {
  float: right;
  width: 50%;
}
.error-message {
  color: red;
}
</style>
