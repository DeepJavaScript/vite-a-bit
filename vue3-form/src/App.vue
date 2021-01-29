<template>
  <div class="container">
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="user.name" />
      </div>

      <div class="form-group">
        <label for="age">年齡</label>
        <input type="number" id="age" v-model.number="user.age" />
      </div>

      <div class="form-group">
        <label for="phone">電話</label>
        <input type="tel" id="phone" v-model="user.phone" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="user.email" />
      </div>

      <div class="form-group">
        <label for="password">密碼</label>
        <input
          :type="user.isShowPassword ? 'password' : 'text'"
          id="password"
          v-model="user.password"
        />

        <div class="form-check">
          <input
            type="checkbox"
            id="show-password"
            v-model="user.isShowPassword"
          />
          <label for="show-password">看密碼</label>
        </div>
      </div>

      <div class="form-group">
        <label for="date">日期</label>
        <input type="date" id="date" v-model="user.date" />
      </div>

      <div class="form-group">
        <label for="time">時間</label>
        <input type="time" id="time" v-model="user.time" />
      </div>

      <fieldset>
        <legend>性別</legend>

        <div class="form-check">
          <input type="radio" id="male" value="生理男" v-model="user.sex" />
          <label for="male">生理男</label>
        </div>

        <div class="form-check">
          <input type="radio" id="female" value="生理女" v-model="user.sex" />
          <label for="female">生理女</label>
        </div>

        <div class="form-check">
          <input type="radio" id="sexual" value="多元" v-model="user.sex" />
          <label for="sexual">多元</label>
        </div>
      </fieldset>

      <FormAdderCheckbox
        title="興趣"
        addText="加興趣"
        v-model:options="hobbyOptions"
        v-model:checkedItems="user.hobbies"
      />

      <FormTag v-model:tags="user.tags" />

      <div class="form-group">
        <label for="location">棲息地</label>
        <select id="location" v-model="user.location">
          <option :value="null" disabled>請選擇</option>
          <option value="台南">台南</option>
          <option value="台北">台北</option>
          <option value="高雄">高雄</option>
        </select>
      </div>

      <div class="form-group">
        <label for="feel">感覺</label>
        <input type="range" id="feel" v-model.number="user.feel" />
      </div>

      <FormFile v-model:file="user.image" />

      <div class="form-group">
        <label for="note">備註</label>
        <textarea id="note" cols="30" rows="10" v-model="user.note" />
      </div>

      <button type="reset">重設</button>
      <button type="submit">送出</button>
    </form>

    <div class="result">
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import FormTag from './components/FormTag.vue';
import FormAdderCheckbox from './components/FormAdderCheckbox.vue';
import FormFile from './components/FormFile.vue';

import useUserForm from './composables/useUserForm';

export default {
  components: {
    FormTag,
    FormAdderCheckbox,
    FormFile
  },
  setup() {
    const hobbyOptions = ref(['睡覺', '寫程式']);

    const defaultUserOptions = {
      hobbies: ['寫程式'],
      tags: ['Vue', 'JS']
    };
    const { user, submit } = useUserForm(defaultUserOptions);

    return {
      hobbyOptions,

      user,
      submit
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.container {
  display: flex;
}
</style>
