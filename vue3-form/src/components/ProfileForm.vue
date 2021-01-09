<template>
  <h1>表單</h1>
  <form action="">
    <VInput
      label="姓名"
      placeholder="Chris"
      type="text"
      name="name"
      v-model="name"
      required
    ></VInput>
    <VInput
      label="電話"
      placeholder="0921026229"
      type="tel"
      name="phone"
      required
      v-model="phone"
    ></VInput>
    <VInput label="日期" type="date" name="date" v-model="date"></VInput>
    <VInput label="時間" type="time" name="time" v-model="time"></VInput>
    <VRadio label="性別" :options="optionsGender" v-model="gender"></VRadio>
    <VAddText
      v-slot="{ allOptions }"
      required
      :options="optionsHobby"
      text="興趣+"
    >
      <VCheckbox
        label="興趣"
        :options="allOptions"
        name="hobbies"
        v-model="hobbies"
      ></VCheckbox>
    </VAddText>
    <VAddText
      v-slot="{ allOptions }"
      :options="labels"
      name="labels"
      text="標籤+"
    >
      <VLabel label="標籤" :labels="allOptions"></VLabel>
    </VAddText>
    <VSelect label="棲息地" :options="optionsLocation" v-model="location">
      <option disabled :value="null">--</option>
    </VSelect>
    <VInput
      label="年齡"
      placeholder="18"
      type="number"
      name="age"
      v-model.number="age"
      required
    ></VInput>
    <VInput
      label="e-mail"
      placeholder="chris@goodideas-studio.com"
      type="email"
      name="email"
      v-model="email"
    ></VInput>
    <VPassword label="密碼" name="password" v-model="password"></VPassword>
    <VInput
      label="最近心情"
      type="range"
      name="range"
      min="1"
      setp="1"
      max="5"
      v-model="range"
    ></VInput>
    <div>
      <label> 備註 </label><br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        v-model="multi_line_text"
      ></textarea>
    </div>
    <input type="submit" value="submit" />
    <input type="reset" value="reset" />
  </form>
</template>

<script>
import VInput from './v-input.vue';
import VRadio from './v-radio.vue';
import VCheckbox from './v-checkbox.vue';
import VAddText from './v-add-text.vue';
import VLabel from './v-label.vue';
import VSelect from './v-select.vue';
import VPassword from './v-password.vue';

export default {
  components: {
    VInput,
    VRadio,
    VCheckbox,
    VLabel,
    VAddText,
    VSelect,
    VPassword
  },
  data() {
    return {
      name: '',
      phone: '',
      date: '2021-01-08',
      time: '23:17:55',
      gender: '',
      hobbies: [],
      labels: [],
      location: null,
      age: null,
      email: null,
      range: 1,
      multi_line_text: null,
      other: null
    };
  },
  computed: {
    optionsGender() {
      return ['女', '男', '中'];
    },
    optionsHobby() {
      return ['打 code', '看書', '跳 swing'];
    },
    optionsLocation() {
      return ['高雄', '台南', '府城'];
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
