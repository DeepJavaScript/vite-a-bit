import { reactive, readonly, toRaw } from 'vue';

export default function useUserForm(defaultOptions) {
  const initUser = readonly({
    name: '',
    age: 18,
    phone: '',
    email: '',
    password: '',
    date: '',
    time: '',
    sex: null,
    hobbies: [],
    tags: [],
    location: null,
    feel: 0,
    image: null,
    note: '',
    ...defaultOptions
  });

  const user = reactive({ ...initUser });

  function onSubmit() {
    console.log('onSubmit');
    console.log(toRaw(user));
  }

  function onReset() {
    console.log('onReset');
    // 不能用物件解構重新賦值，只能用 `Object.assign()` QQ
    // user = { ...initUser };
    Object.assign(user, initUser);
  }

  return {
    user,
    onSubmit,
    onReset
  };
}
