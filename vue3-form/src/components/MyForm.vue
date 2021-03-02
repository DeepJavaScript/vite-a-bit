<template>
  <form id="myform">
    <p>
      <label for="name">名字：</label>
      <input type="text" id="name" name="name" />
    </p>
    <p>
      <label for="tel">電話</label>
      <input type="tel" id="tel" name="tel" />
    </p>
    <p>
      <label for="date">日期：</label>
      <input type="date" id="date" name="date" />
    </p>
    <p>
      <label for="time">時間：</label>
      <input type="time" id="time" name="time" />
    </p>
    <p>
      性別：
      <input type="radio" id="male" name="gender" value="male" checked />
      <label for="male">生理男</label>

      <input type="radio" id="female" name="gender" value="female" />
      <label for="female">生理女</label>

      <input type="radio" id="custom" name="gender" value="custom" />
      <label for="custom">多元</label>
    </p>

    <label for="interests">興趣：</label>
    <div v-for="(interestOption, index) in interestOptions" :key="index">
      <input
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
      <span v-for="(tag, index) of tags" :key="index">
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
      <select id="location" name="residence">
        <option value="">請選擇</option>
        <option value="tainan">台南</option>
        <option value="taipei">台北</option>
        <option value="other">其他</option>
      </select>
    </p>
    <p>
      <label for="age">年齡：</label>
      <input type="number" id="age" name="age" />
    </p>
    <p>
      <label for="email">Email：</label>
      <input type="email" id="email" name="email" />
    </p>
    <p>
      <label for="password">Password：</label>
      <input
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
      <input type="range" id="feeling" name="feeling" min="1" max="3" />
    </p>
    <p>
      <label for="comment">備註</label>
      <textarea form="myform" rows="3" id="comment" name="comment"></textarea>
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
      interestOptions: ["寫程式", "看電影"],
      newInterest: "",
      tags: [],
      newTag: "",
      isPasswordShown: false,
    };
  },
  methods: {
    addInterestOption() {
      this.interestOptions.push(this.newInterest);
      this.newInterest = "";
    },
    addTag() {
      this.tags.push(this.newTag);
      this.newTag = "";
    },
    removeTag(index) {
      this.tags.splice(index, 1);
    },
  },
};
</script>
