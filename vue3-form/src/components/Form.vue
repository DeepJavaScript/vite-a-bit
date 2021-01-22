<template>
  <section class="form-container">
    <h1>{{ title }}</h1>
    <form class="form" action="">
      <div class="form-field">
        <label>姓名</label>
        <input v-model="form.name" type="text">
      </div>
      <div class="form-field">
        <label>電話</label>
        <input v-model="form.phone" type="tel">
      </div>
      <div class="form-field">
        <label>日期</label>
        <input v-model="form.date" type="date">
      </div>
      <div class="form-field">
        <label>時間</label>
        <input v-model="form.time" type="time">
      </div>
      <div class="form-field">
        <label>性別</label>
        <RadioGroup
          groupName="gender"
          :options="genderOptions"
          @update:radio="form.gender = $event"
        ></RadioGroup>
      </div>
      <div class="form-field">
        <label>興趣</label>
        <DynamicCheckbox
          groupName="hobbies"
          :options="hobbiesOptions"
          @update:Checked="form.hobbies = $event"
        ></DynamicCheckbox>
      </div>
      <div class="form-field">
        <label>標籤</label>
        <DynamicHashTag
          groupName="hashTags"
          :options="hashTagsOptions"
          @update:hashTags="form.hashTags = $event"
        ></DynamicHashTag>
      </div>
      <div class="form-field">
        <label>棲息地</label>
        <SelectGroup
          groupName="city"
          :options="cityOptions"
          @update:selected="form.city = $event"
        ></SelectGroup>
      </div>
      <div class="form-field">
        <label>年齡</label>
        <input v-model="form.age" type="number" min="1">
      </div>
      <div class="form-field">
        <label>信箱</label>
        <input v-model="form.email" type="email">
      </div>
      <div class="form-field">
        <label>密碼</label>
        <PlainPassword
          :value="form.password"
          @update:psaaword="form.password = $event"
        ></PlainPassword>
      </div>
      <div class="form-field">
        <label>照片</label>
        <UploadFile
          @update:files="form.files = $event"
        ></UploadFile>
      </div>
      <div class="form-field">
        <label>備註</label>
        <textarea v-model="form.note" rows="3" maxlength="250"></textarea>
      </div>
      {{form}}
    </form>
  </section>
</template>

<script>
import RadioGroup from '../components/RadioGroup.vue'
import DynamicCheckbox from '../components/DynamicCheckbox.vue'
import DynamicHashTag from '../components/DynamicHashTag.vue'
import SelectGroup from '../components/SelectGroup.vue'
import PlainPassword from '../components/PlainPassword.vue'
import UploadFile from '../components/UploadFile.vue'
export default {
	components: {
    RadioGroup,
    DynamicCheckbox,
    DynamicHashTag,
    SelectGroup,
    PlainPassword,
    UploadFile
  },
  props: {
    title: {
			type: String,
			requery: true
    },
  },
  data() {
    return {
      form: {
        name: null,
        phone: null,
        date: null,
        time: null,
        gender: null,
        hobbies: [],
        hashTags: [],
        city: null,
        age: null,
        email: null,
        password: null,
        note: null,
        files: []
      }
    }
  },
  computed: {
    genderOptions() {
      return [
        {
          text: '生理男',
          value: 'man'
        },{
          text: '生理女',
          value: 'female'
        },{
          text: '多元',
          value: 'sexual-or-gender-diversity'
        }
      ] 
    },
    hobbiesOptions() {
      return [
        {
          text: '打字',
          value: 'coding'
        },{
          text: '抓蟲',
          value: 'debug'
        },{
          text: '跳舞',
          value: 'dancing'
        },{
          text: '賺$',
          value: 'earning-income'
        }
      ] 
    },
    hashTagsOptions() {
      return [
        {
          text: '碼農',
          value: '碼農'
        },{
          text: '有機',
          value: '有機'
        },{
          text: '舞棍阿伯',
          value: '舞棍阿伯'
        },{
          text: '暴發戶',
          value: '暴發戶'
        }
      ] 
    },
    cityOptions() {
      return [
        {
          text: '台南',
          value: '台南'
        },{
          text: '其他',
          value: '其他'
        }
      ] 
    },
  },
}
</script>

<style lang="scss" scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 0 100px;
  .form {
    .form-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  }
}
</style>