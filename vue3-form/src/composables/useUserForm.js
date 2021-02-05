import { reactive, toRefs, readonly } from 'vue';

export default function useUserForm(defaultOptions) {
  const initUser = readonly({
    name: '',
    age: 18,
    phone: '',
    email: '',
    password: '',
    isShowPassword: false,
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

  const state = reactive({ user: { ...initUser } });
  const { user } = toRefs(state);

  function onSubmit() {
    console.log('onSubmit');
    console.log(state.user);
  }

  function onReset() {
    console.log('onReset');
    state.user = { ...initUser };
    console.log(state.user);
  }

  return {
    user,
    onSubmit,
    onReset
  };
}
