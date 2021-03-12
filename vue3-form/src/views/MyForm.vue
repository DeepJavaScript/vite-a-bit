<template>
  <ValidateForm id="myForm" @reset="onReset" @submit="onSubmit">
    <v-input
      v-model="userData.name"
      inputType="text"
      label="名字"
      name="name"
      :isRequired="true"
    />
    <v-input v-model="userData.tel" inputType="tel" label="電話" name="tel" />
    <v-input
      v-model="userData.date"
      inputType="date"
      label="日期"
      name="date"
    />
    <v-input
      v-model="userData.time"
      inputType="time"
      label="時間"
      name="time"
    />
    <v-radios
      v-model="userData.gender"
      label="性別"
      name="gender"
      :isRequired="true"
      :options="[
        { label: '生理男', value: 'male' },
        { label: '生理女', value: 'female' },
        { label: '多元', value: 'others' },
      ]"
    />
    <v-addable-checkbox
      v-model="userData.interests"
      v-model:options="interestOptions"
      label="興趣"
      buttonLabel="新增興趣"
      name="interests"
      :isRequired="true"
    />
    <v-tags v-model="userData.tags" label="標籤" buttonLabel="新增標籤" />

    <v-select
      v-model="userData.location"
      label="居住地"
      name="residence"
      :options="[
        { label: '台南', value: 'Tainan' },
        { label: '台北', value: 'Taipei' },
        { label: '其他地區', value: 'Others' },
      ]"
    />
    <v-input
      v-model="userData.age"
      inputType="number"
      label="年齡"
      name="age"
    />
    <v-input
      v-model="userData.email"
      inputType="email"
      label="Email"
      name="email"
    />
    <v-password v-model="userData.password" name="password" label="Password" />
    <v-input
      v-model="userData.feeling"
      inputType="range"
      label="體驗分數"
      name="feeling"
      mix="1"
      max="10"
    />
    <p>
      <label for="comment">備註</label>
      <textarea
        v-model="userData.comment"
        form="myForm"
        rows="3"
        id="comment"
        name="comment"
      ></textarea>
    </p>
    <v-file-image
      v-model="userData.photos"
      label="照片"
      name="photo"
      :multipleImage="true"
      :imagePreview="true"
    />
    <p>
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </p>
  </ValidateForm>

  <pre>{{ userData }}</pre>
</template>

<script>
import { Form } from "vee-validate";
import VAddableCheckbox from "../components/v-addable-checkbox.vue";
import vCheckboxes from "../components/v-checkboxes.vue";
import VFileImage from "../components/v-file-image.vue";
import vInput from "../components/v-input.vue";
import vPassword from "../components/v-password.vue";
import vRadios from "../components/v-radios.vue";
import VSelect from "../components/v-select.vue";
import VTags from "../components/v-tags.vue";

export default {
  components: {
    ValidateForm: Form,
    vInput,
    vRadios,
    vCheckboxes,
    VAddableCheckbox,
    VTags,
    VSelect,
    vPassword,
    VFileImage,
  },
  data() {
    return {
      userData: {},
      interestOptions: ["寫程式", "看電影"],
      newInterest: "",
      newTag: "",
    };
  },
  created() {
    this.onReset();
  },
  methods: {
    onPhotoChange(event) {
      const files = [...event.target.files];
      this.userData.photos = files.map((file) => {
        return {
          url: URL.createObjectURL(file),
        };
      });
    },
    onReset() {
      this.userData = this.initialData;
    },
    onSubmit() {
      console.log(this.userData);
    },
  },
  computed: {
    initialData() {
      return {
        name: "louis",
        tel: "098812****",
        date: "2021-03-12",
        time: "15:15",
        gender: null,
        interests: ["寫程式"],
        tags: ["#VITEABIT"],
        location: "Tainan",
        age: "18",
        email: "louis222220@gmail.com",
        password: "myPassword123IsABadPassword",
        feeling: "7",
        comment: "Hello\nWorld",
        photos: [],
      };
    },
  },
};
</script>
