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
    </form>

  </section>
</template>

<script>
import RadioGroup from '../components/RadioGroup.vue'
export default {
	components: {
    RadioGroup,
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