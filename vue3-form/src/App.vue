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

      <fieldset>
        <legend>興趣</legend>
        <input type="checkbox" id="sleep" value="睡覺" v-model="user.hobbies" />
        <label for="sleep">睡覺</label>
        <input
          type="checkbox"
          id="coding"
          value="寫程式"
          v-model="user.hobbies"
        />
        <label for="coding">寫程式</label>

        <div>
          <input type="text" id="add-hobby" />
          <button type="button">加興趣</button>
        </div>
      </fieldset>

      <fieldset class="form-tag">
        <legend>標籤</legend>
        <ul class="form-tag-list">
          <li class="form-tag-item">
            <span class="form-tag-content">Titan</span>
            <button type="button" class="form-tag-remove">X</button>
          </li>
        </ul>
        <div class="form-group">
          <input type="text" />
          <button type="button">加標籤</button>
        </div>
      </fieldset>

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

      <div class="form-group">
        <label for="image">上傳圖片 (限圖片)</label>
        <input type="file" id="image" :value="user.image" />

        <div class="preview-image">
          <img src="" alt="圖片" />
        </div>
      </div>

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
import useUserForm from './composables/useUserForm';

export default {
  setup() {
    const { user, submit } = useUserForm();

    return {
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
