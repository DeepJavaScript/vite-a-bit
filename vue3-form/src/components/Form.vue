<template>
  <section class="form-container">
    <h1>{{ title }}</h1>
    <form class="form" action="">
      <div class="form-field">
        <label for="">姓名</label>
        <input type="text">
      </div>
      <div class="form-field">
        <label for="">電話</label>
        <input type="tel">
      </div>
      <div class="form-field">
        <label for="">日期</label>
        <input type="date">
      </div>
      <div class="form-field">
        <label for="">時間</label>
        <input type="time">
      </div>
      <div class="form-field">
        <label for="">性別</label>
        <RadioGroup
          groupName="gender"
          :options="genderOptions"
          @updateSelected="form.gender = $event"
        ></RadioGroup>
      </div>
      <div class="form-field">
        <label for="">興趣</label>
        <DynamicCheckbox
          groupName="hobbies"
          :options="hobbiesOptions"
          @updateSelected="form.hobbies = $event"
        ></DynamicCheckbox>
      </div>
      <div class="form-field">
        <label for="">標籤</label>
        <DynamicHashTag
          groupName="hashTags"
          :options="hashTagsOptions"
          @updateSelected="form.hashTags = $event"
        ></DynamicHashTag>
      </div>
      <div class="form-field">
        <label for="">棲息地</label>
        <SelectGroup
          groupName="city"
          :options="cityOptions"
          @updateSelected="form.city = $event"
        ></SelectGroup>
      </div>
      <pre>{{form}}</pre>
    </form>
  </section>
</template>

<script>
import RadioGroup from '../components/RadioGroup.vue'
import DynamicCheckbox from '../components/DynamicCheckbox.vue'
import DynamicHashTag from '../components/DynamicHashTag.vue'
import SelectGroup from '../components/SelectGroup.vue'
export default {
	components: {
    RadioGroup,
    DynamicCheckbox,
    DynamicHashTag,
    SelectGroup
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
        gender: null,
        hobbies: [],
        hashTags: [],
        city: null
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
a {
  color: #42b983;
}
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