import { reactive } from 'vue';

export default function useUserForm(defaultOptions) {
  const user = reactive({
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

  function submit() {
    console.log(user);
  }

  return {
    user,
    submit
  };
}
