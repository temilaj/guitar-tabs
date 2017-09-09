<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" v-model="email" placeholder="email"/>
    <br>
    <input type="password" name="password" v-model="password" placeholder="password"/>
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// Controller
import authenticationService from '@/services/authenticationService';
// import authenticationService from '../services/authenticationService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  watch: {
    email(value) {
      console.log(`email has changed ${value}`);
    },
  },
  methods: {
    async register() {
      console.log('register button was clicked', this.email, this.password);
      const { email, password } = this;
      const response = await authenticationService.register({ email, password });
      console.log(response.data);
    },
    // register() {
    //   console.log('register button was clicked', this.email, this.password);
    //   const { email, password } = this;
    //   authenticationService.register({ email, password })
    //     .then(response => console.log(response));
    // },
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.email = 'helloworld';
  //   }, 5000);
  // },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
