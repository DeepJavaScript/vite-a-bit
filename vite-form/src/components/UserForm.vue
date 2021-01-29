<template>
  <form action="" @submit.prevent="$emit('onSubmit')" @reset.prevent="$emit('onReset')">
    <h1>填一下ㄅ！</h1>
    <div class="field photo">
      <div>
        <img :src="userProfile.photoURL" alt="user-photo">
      </div>
      <label for="photo">大頭貼</label>
      <input
        type="file"
        name="photo"
        id="photo"
        accept=".png,.jpg,.jpeg,.svg"
        @input.prevent="setPhoto"
      >
        <!-- :value="userProfile.photoFile" -->
    </div>
    <div class="field">
      <label for="name">姓名</label>
      <input
        type="text"
        name="name"
        id="name"
        @change.prevent="setProfile({name: $event.target.value})"
        :value="userProfile.name"
      >
    </div>
    <div class="field">
      <label for="tel">電話</label>
      <input
        type="tel"
        name="tel"
        id="tel"
        :value="userProfile.tel"
        @change.prevent="setProfile({tel: $event.target.value})"
      >
    </div>
    <div class="field">
      <label for="date">日期</label>
      <input
        type="date"
        name="date"
        id="date"
        :value="userProfile.date"
        @input.prevent="setProfile({date: $event.target.value})"
      >
    </div>
    <div class="field">
      <label for="time">時間</label>
      <input
        type="time"
        name="time"
        id="time"
        :value="userProfile.time"
        @input.prevent="setProfile({time: $event.target.value})"
      >
    </div>
    <div class="field">
      <legend>興趣</legend>
      <input type="text" @input.prevent="newInterest = $event.target.value">
      <button type="button" @click="addInterestOption">加入</button>
      <div v-for="item in interestsOptions" :key="item.value">
        <input
          type="checkbox"
          :name="`interests-${item.value}`"
          :id="`interests-${item.value}`"
          :value="item.value"
          :checked="isInterestChecked(item.value)"
          @change.prevent="setInterests(item.value, $event.target.checked)"
        >
        <label for="interests-item-1">{{ item.name }}</label>
      </div>
    </div>
    <div class="field">
      <label for="tag">標籤</label>
      <input
        type="text"
        name="tag"
        id="tag"
        @change.prevent="newTag = $event.target.value"
      >
      <button type="button" @click="setTags">加入</button>
      <div class="tag-list">
        <span v-for="(tag, index) in userProfile.tags" :key="'tag' + index">{{ tag }}</span>
      </div>
    </div>
    <div class="field">
      <label for="location">居住地</label>
      <select
        id="location"
        :value="userProfile.location"
        @change.prevent="setProfile({location: $event.target.value})"
      >
        <template v-for="item in locationOptions" :key="item.value">
          <option :value="item.value">{{ item.name }}</option>
        </template>
      </select>
    </div>
    <div class="field">
      <label for="age">年齡</label>
      <input
        type="number"
        name="age"
        id="age"
        :value="userProfile.age"
        @change.prevent="setProfile({age: $event.target.value})"
      >
    </div>
    <div class="field">
      <label for="email">e-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        :value="userProfile.email"
        @change.prevent="setProfile({email: $event.target.value})"
      >
    </div>
    <div class="field">
      <label for="password">密碼</label>
      <input
        :type="passwordType"
        name="password"
        id="password"
        :value="userProfile.password"
        @change.prevent="setProfile({password: $event.target.value})"
      >
      <button type="button" @click="switchPassword">切換明碼/密碼</button>
    </div>
    <div class="field">
      <label for="evaluate">本表單的體驗（0-5 分）</label>
      <input
        type="range"
        name="evaluate"
        id="evaluate"
        min="0"
        max="5"
        :value="userProfile.evaluate"
        @change.prevent="setProfile({evaluate: $event.target.value})"
      >
    </div>
    <div class="field">
      <label for="comment">備註</label>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="3"
        :value="userProfile.comment"
        @change.prevent="setProfile({comment: $event.target.value})"
      ></textarea>
    </div>
    <div class="button-group">
      <button type="submit">確認</button>
      <button type="reset">取消重填</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    userProfile: {
      type: Object,
      required: true
    },
    interestsOptions: {
      type: Array,
      required: true
    },
    locationOptions: {
      type: Array,
      required: true
    }
  },
  emits: [
    'update:userProfile',
    // 'update:photoFile',
    // 'update:name',
    // 'update:tel',
    // 'update:date',
    // 'update:time',
    // 'update:interest',
    // 'update:location',
    // 'update:age',
    // 'update:email',
    // 'update:password',
    // 'update:evaluate',
    // 'update:comment',
    // 'update:tags',
    // 'update:interests'
  ],
  data() {
    return {
      newTag: null,
      interestsArray: [],
      newUserProfile: {},
      newInterest: null,
      passwordType: 'password'
    }
  },
  methods: {
    isInterestChecked(interestValue) {
      return this.userProfile.interests.some(interest =>  interest === interestValue);
    },
    addInterestOption() {
      if (!this.newInterest) return;
      const newOption = {
        name: this.newInterest,
        value: `interest-${Date.now()}`
      }
      let newOptionsArray = this.interestsOptions;
      newOptionsArray.push(newOption);
      this.$emit('update:interestsOptions', newOptionsArray);
    },
    switchPassword() {
      if(this.passwordType === 'password') {
        this.passwordType = 'text';
      }
      if(this.passwordType === 'text') {
        this.passwordType = 'password';
      }
    },
    setPhoto(e) {
      const photoURL = URL.createObjectURL(e.target.files[0]);
      this.setProfile({photoURL});
    },
    setTags(payload) {
      if(!this.newTag) return;
      let newTagsArray = this.userProfile.tags;
      newTagsArray.push(this.newTag);
      this.setProfile({tags: newTagsArray});
    },
    setInterests(interestValue, isChecked) {
      this.interestArray = this.userProfile.interests;
      this.interestArray.push(interestValue);
      this.setProfile({interests: this.interestArray});
    },
    setProfile(newField) {
      console.log('newField', newField);
      this.newUserProfile = this.userProfile;
      const updatedProfile = Object.assign(this.newUserProfile, newField);
      this.$emit('update:userProfile', updatedProfile);
    }
  }
}
</script>

<style scoped lang="scss">
form {
  width: 320px;
  margin: auto;
  padding-bottom: 30px;
  h1 {
    margin: 0 0 20px 0;
  }
}
.field {
  margin-bottom: 10px;
  display: flex;
  justify-self: space-between;
  label {
    margin-right: 10px;
  }
  img {
    width: 100%;
  }
}

.photo {
  flex-wrap: wrap;
  > div {
    flex: 1 0 100%;
    border-radius: 99999px;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      vertical-align: top;
    }
  }
}

.tag {
  &-list {
    span {
      margin: 0 3px;
      padding: 2px;
      background: green;
      color: #fff;
    }
  }
}
</style>