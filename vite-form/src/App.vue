<template>
  <UserForm
    :userProfile="userProfile"
    :locationOptions="locationOptions"
    :interestsOptions="interestsOptions"
    v-model:userProfile="userProfile"
    v-model:interestsOptions="interestsOptions"

    @update:name="userProfile.name = $event"
    @onSubmit="onSubmit"
    @onReset="onReset"
  />
  <Popover
    :popoverIsShow="popoverIsShow"
    :userProfile="userProfile"

    @closePopover="popoverIsShow = false"
  />
</template>

<script>
import UserForm from './components/UserForm.vue';
import Popover from './components/Popover.vue';

export default {
  components: {
    UserForm,
    Popover
  },
  data() {
    return {
      userProfile: {
        photoFile: null,
        photoURL: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        name: '',
        tel: '',
        date: '',
        time: '',
        interests: ['paint', 'game'],
        tags: ['萌', '呆萌'],
        location: null,
        age: null,
        email: '',
        password: '',
        evaluate: 0,
        comment: ''
      },
      interestsOptions: [
        {
          value: 'paint',
          name: '畫畫'
        },
        {
          value: 'game',
          name: '打電動'
        }
      ],
      locationOptions: [
        {
          value: null,
          name: '--請選擇--'
        },
        {
          value: 'tainan',
          name: '台南'
        },
        {
          value: 'chiayi',
          name: '嘉義'
        },
        {
          value: 'yunlin',
          name: '雲林'
        },
        {
          value: 'changhua',
          name: '彰化'
        },
        {
          value: 'taichung',
          name: '台中'
        }
      ],
      popoverIsShow: false
    }
  },
  methods: {
    print(val) {
      console.log(val);
    },
    onSubmit() {
      this.popoverIsShow = true;
    },
    onReset() {
      this.userProfile = {
        photoFile: null,
        photoURL: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
        name: '',
        tel: '',
        date: '',
        time: '',
        interests: [],
        tags: ['萌', '呆萌'],
        location: null,
        age: null,
        email: '',
        password: '',
        evaluate: 0,
        comment: ''
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>