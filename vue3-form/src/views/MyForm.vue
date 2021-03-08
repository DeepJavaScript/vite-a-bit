<template>
  <pre>
    {{ userData }}
  </pre>
  <form id="myform" action="" @reset.prevent="onReset" @submit.prevent="onSubmit">
    <p>
      <label for="name">名字：</label>
      <input v-model="userData.name" type="text" id="name" name="name" />
    </p>
    <p>
      <label for="tel">電話</label>
      <input v-model="userData.tel" type="tel" id="tel" name="tel" />
    </p>
    <p>
      <label for="date">日期：</label>
      <input v-model="userData.date" type="date" id="date" name="date" />
    </p>
    <p>
      <label for="time">時間：</label>
      <input v-model="userData.time" type="time" id="time" name="time" />
    </p>
    <p>
      性別：
      <input v-model="userData.gender" type="radio" id="male" name="gender" value="male" checked />
      <label for="male">生理男</label>

      <input v-model="userData.gender" type="radio" id="female" name="gender" value="female" />
      <label for="female">生理女</label>

      <input v-model="userData.gender" type="radio" id="custom" name="gender" value="custom" />
      <label for="custom">多元</label>
    </p>

    <label for="interests">興趣：</label>
    <div v-for="(interestOption, index) in interestOptions" :key="index">
      <input
        v-model="userData.interests"
        type="checkbox"
        :id="interestOption"
        :value="interestOption"
        name="interests"
      />
      <label :for="interestOption">{{ interestOption }}</label>
    </div>

    <input type="text" v-model="newInterest" />
    <button type="button" @click="addInterestOption">新增興趣</button>

    <p>
      <span v-for="(tag, index) of userData.tags" :key="index">
        &nbsp;
        <span>{{ tag }}</span>
        <span @click="removeTag(index)">x</span>
        &nbsp;
      </span>

      <input type="text" v-model="newTag" />
      <button type="button" @click="addTag">+</button>
    </p>
    <p>
      <label for="location">棲息地：</label>
      <select v-model="userData.location" id="location" name="residence">
        <option value="" disabled>請選擇</option>
        <option value="tainan">台南</option>
        <option value="taipei">台北</option>
        <option value="other">其他</option>
      </select>
    </p>
    <p>
      <label for="age">年齡：</label>
      <input v-model="userData.age" type="number" id="age" name="age" />
    </p>
    <p>
      <label for="email">Email：</label>
      <input v-model="userData.email" type="email" id="email" name="email" />
    </p>
    <p>
      <label for="password">Password：</label>
      <input
        v-model="userData.password"
        :type="isPasswordShown ? 'text' : 'password'"
        id="password"
        name="password"
      />
    </p>

    <p>
      <input type="checkbox" id="passwordSwitch" v-model="isPasswordShown" />
      <label for="passwordSwitch">看明碼</label>
    </p>

    <p>
      <label for="feeling">體驗感受</label>
      <input v-model="userData.feeling" type="range" id="feeling" name="feeling" min="1" max="3" />
    </p>
    <p>
      <label for="comment">備註</label>
      <textarea v-model="userData.comment" form="myform" rows="3" id="comment" name="comment"></textarea>
    </p>
    <p>
      <label for="photo">照片</label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        multiple
        @change="onPhotoChange"
      />
    </p>
    <p>
      <label>預覽</label>
      <img v-for="(photo, index) of userData.photos" :key="index" :src="photo.url" />
    </p>
    <p>
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userData: {},
      interestOptions: ["寫程式", "看電影"],
      newInterest: "",
      newTag: "",
      isPasswordShown: false,
    };
  },
  created() {
    this.onReset();
  },
  methods: {
    addInterestOption() {
      this.interestOptions.push(this.newInterest);
      this.newInterest = "";
    },
    addTag() {
      this.userData.tags.push(this.newTag);
      this.newTag = "";
    },
    removeTag(index) {
      this.userData.tags.splice(index, 1);
    },
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
  },
  computed: {
    initialData() {
      return {
        name: 'louis',
        tel: null,
        date: null,
        time: null,
        gender: null,
        interests: [],
        tags: [],
        location: null,
        age: null,
        email: null,
        password: null,
        feeling: null,
        comment: null,
        photos: [],
      };
    },
  },
};
</script>
