<template>
  <section class="form-container">
    <h1>{{ title }}</h1>
    <form class="form" action="">
      <div class="form-field">
        <label for="">姓名</label>
        <input type="text" name="" id="">
      </div>
      <div class="form-field">
        <label for="">電話</label>
        <input type="tel" name="" id="">
      </div>
      <div class="form-field">
        <label for="">日期</label>
        <input type="date" name="" id="">
      </div>
      <div class="form-field">
        <label for="">時間</label>
        <input type="time" name="" id="">
      </div>
      <div class="form-field">
        <label for="">性別</label>
        <RadioGroup
          groupName="gender"
          :options="genderOptions"
          @updateSelected="selectedGender = $event"
        ></RadioGroup>
      </div>
      <div class="form-field">
        <label for="">興趣</label>
        <DynamicCheckbox
          groupName="hobbies"
          :options="hobbiesOptions"
          @updateSelected="selectedHobbies = $event"
        ></DynamicCheckbox>
      </div>
    </form>
  </section>
</template>

<script>
import RadioGroup from '../components/RadioGroup.vue'
import DynamicCheckbox from '../components/DynamicCheckbox.vue'
export default {
	components: {
    RadioGroup,
    DynamicCheckbox
  },
  props: {
    title: {
			type: String,
			requery: true
    },
  },
  data() {
    return {
      selectedGender: null,
      selectedHobbies: []
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
    }
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