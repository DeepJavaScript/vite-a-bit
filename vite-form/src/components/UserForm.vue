<template>
  <Form action="" @submit.prevent="$emit('onSubmit')" @reset.prevent="$emit('onReset')">
    <h1>填一下ㄅ！</h1>
    <div class="field photo">
      <div>
        <img :src="userProfile.photoURL" alt="user-photo">
      </div>
      <label for="photo">大頭貼</label>
      <input
        type="file"
        id="photo"
        accept=".png,.jpg,.jpeg,.svg"
        @input.prevent="handlePhoto"
      >
    </div>
    <div class="field">
      <BasicInput
        :inputType="'text'"
        :value="userProfile.name"
        :labelText="'姓名'"
        :dataProperty="'name'"
        :fieldName="'name'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <BasicInput
        :inputType="'tel'"
        :value="userProfile.tel"
        :labelText="'電話'"
        :dataProperty="'tel'"
        :fieldName="'tel'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <BasicInput
        :inputType="'date'"
        :value="userProfile.date"
        :labelText="'日期'"
        :dataProperty="'date'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <BasicInput
        :inputType="'time'"
        :value="userProfile.time"
        :labelText="'時間'"
        :dataProperty="'time'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <AddingInput
        :inputType="'text'"
        :inputId="'interests'"
        :labelText="'興趣'"
        @valueInput="newInterest = $event"
        @click="addInterestOption"
      />
    </div>
    <div class="check-list">
      <CheckItem
        :list="userProfile.interests"
        :interestsOptions="interestsOptions"
        @check="handleInterests"
      />
    </div>
    <div class="field">
      <AddingInput
        :inputType="'text'"
        :inputId="'tag'"
        :labelText="'標籤'"
        @valueInput="newTag = $event"
        @click="handleTagAdd"
      />
    </div>
    <div class="tag-list">
      <Tag
        :userProfileTags="userProfile.tags"
        @removeTag="handleTagRemove"
      />
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
      <BasicInput
        :inputType="'number'"
        :value="userProfile.age"
        :labelText="'年齡'"
        :dataProperty="'age'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <BasicInput
        :inputType="'email'"
        :value="userProfile.email"
        :labelText="'e-mail'"
        :dataProperty="'email'"
        @setProfile="setProfile"
      />
    </div>
    <div class="field">
      <PasswordInput
        :password="userProfile.password"
        @setProfile="setProfile($event)"
      />
    </div>
    <div class="field">
      <label for="evaluate">本表單的體驗（0-5 分）</label>
      <input
        type="range"
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
  </Form>
</template>

<script>
import { Form } from 'vee-validate';
import BasicInput from './FormComponents/BasicInput.vue'
import CheckItem from './FormComponents/CheckItem.vue';
import Tag from './FormComponents/Tag.vue';
import AddingInput from './FormComponents/AddingInput.vue';
import PasswordInput from './FormComponents/PasswordInput.vue';

export default {
  name: 'UserForm',
  components: {
    Form,
    BasicInput,
    CheckItem,
    Tag,
    AddingInput,
    PasswordInput
  },
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
    'update:name',
  ],
  data() {
    return {
      newTag: null,
      newUserProfile: {},
      newInterest: null
    }
  },
  methods: {
    addInterestOption() {
      console.log(this.newInterest);
      if (!this.newInterest) return;
      const newOption = {
        name: this.newInterest,
        value: `interest-${Date.now()}`
      }
      let newOptionsArray = this.interestsOptions;
      newOptionsArray.push(newOption);
      this.$emit('update:interestsOptions', newOptionsArray);
    },
    handlePhoto(e) {
      const photoURL = URL.createObjectURL(e.target.files[0]);
      this.setProfile({photoURL});
    },
    handleTagAdd() {
      if(!this.newTag) return;
      let newTagsArray = this.userProfile.tags;
      newTagsArray.push(this.newTag);
      this.setProfile({tags: newTagsArray});
    },
    handleTagRemove(tagName) {
      let newTagsArray = this.userProfile.tags;
      const tagIndex = newTagsArray.findIndex(item => item === tagName);
      newTagsArray.splice(tagIndex, 1);
      this.setProfile({tags: newTagsArray});
    },
    handleInterests({ interestValue, isChecked }) {
      console.log(interestValue, isChecked);
      let newInterestArray = this.userProfile.interests;
      if (isChecked) {
        newInterestArray.push(interestValue);
      } else {
        const interestIndex = newInterestArray.findIndex(item => item === interestValue);
        newInterestArray.splice(interestIndex, 1);
      }
      console.log(newInterestArray);
      this.setProfile({interests: newInterestArray});
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

.check-list, .tag-list {
  text-align: left;
  margin-bottom: 10px;
}

.validation-message {
  display: block;
  color: red;
  margin-left: 5px;
}
</style>