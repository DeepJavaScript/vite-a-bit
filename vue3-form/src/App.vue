<template>
  <div class="container">
    <form @submit.prevent>
      <FormGroup label="姓名" label-for="name">
        <input type="text" id="name" v-model="user.name" />
      </FormGroup>

      <FormGroup label="年齡" label-for="age">
        <input type="number" id="age" min="1" v-model="user.age" />
      </FormGroup>

      <FormGroup label="電話" label-for="phone">
        <input type="tel" id="phone" v-model="user.phone" />
      </FormGroup>

      <FormGroup label="Email" label-for="email">
        <input type="email" id="email" v-model="user.email" />
      </FormGroup>

      <FormGroup label="密碼" label-for="password">
        <FormPassword
          id="password"
          show-password-id="show-password"
          v-model="user.password"
        />
      </FormGroup>

      <FormGroup label="日期" label-for="date">
        <input type="date" id="date" v-model="user.date" />
      </FormGroup>

      <FormGroup label="時間" label-for="time">
        <input type="time" id="time" v-model="user.time" />
      </FormGroup>

      <FormGroup label="性別">
        <FormRadioGroup id="sex" :options="sexOptions" v-model="user.sex" />
      </FormGroup>

      <FormAdderCheckbox
        id="hobby"
        title="興趣"
        addText="加興趣"
        v-model:options="hobbies"
        v-model:checkedItems="user.hobbies"
      />

      <FormTag v-model:tags="user.tags" />

      <FormGroup label="棲息地" label-for="location">
        <select id="location" v-model="user.location">
          <option :value="null" disabled>請選擇</option>
          <option value="台南">台南</option>
          <option value="台北">台北</option>
          <option value="高雄">高雄</option>
        </select>
      </FormGroup>

      <FormGroup label="感覺" label-for="feel">
        <input
          type="range"
          id="feel"
          v-model.number="user.feel"
          min="0"
          max="6"
        />
      </FormGroup>

      <FormFile v-model:file="user.image" />

      <FormGroup label="備註" label-for="note">
        <textarea id="note" cols="30" rows="10" v-model="user.note" />
      </FormGroup>

      <button type="button" @click="onReset">重設</button>
      <button type="button" @click="onSubmit">送出</button>
    </form>

    <div class="result">
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

import FormGroup from './components/FormGroup.vue';
import FormPassword from './components/FormPassword.vue';
import FormRadioGroup from './components/FormRadioGroup.vue';
import FormTag from './components/FormTag.vue';
import FormAdderCheckbox from './components/FormAdderCheckbox.vue';
import FormFile from './components/FormFile.vue';

import useUserForm from '@/composables/useUserForm';

export default {
  components: {
    FormGroup,
    FormPassword,
    FormRadioGroup,
    FormTag,
    FormAdderCheckbox,
    FormFile
  },
  setup() {
    const sexOptions = [
      {
        text: '生理男',
        value: 'male'
      },
      {
        text: '生理女',
        value: 'female'
      },
      {
        text: '多元',
        value: 'sexual'
      }
    ];
    const hobbies = ref(['睡覺', '寫程式']);
    const hobbyOptions = computed(() => {
      return hobbies.value.map(item => {
        return { text: item, value: item };
      });
    });

    const defaultUserOptions = {
      hobbies: ['寫程式'],
      tags: ['Vue', 'JS']
    };
    const { user, onSubmit, onReset } = useUserForm(defaultUserOptions);

    return {
      sexOptions,
      hobbies,
      hobbyOptions,

      user,
      onSubmit,
      onReset
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
