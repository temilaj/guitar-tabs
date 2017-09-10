<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar dense class="primary" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4">
          <v-text-field type="email" label="email" name="email" v-model="email" placeholder="email"></v-text-field>
          <br>
          <v-text-field type="password" label="password" name="password" v-model="password" placeholder="password"></v-text-field>
          <br>
          <v-alert error value="true" v-if="error">
            {{ error }}
          </v-alert>
          <v-alert success value="true" v-if="response">
            {{ response }}
          </v-alert>
          <br>
          <v-btn
            success
            :loading="loading"
            @click.native="loader = 'loading'"
            @click="login"
            :disabled="loading"
            class="white--text"
            >
            Register
          </v-btn>
          </div>
      </div>
    </v-flex>
  </v-layout>
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
      error: '',
      response: '',
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const { email, password } = this;
        // await authenticationService.register({ email, password });
        const response = await authenticationService.login({ email, password });
        this.response = response.data.message;
        this.loading = false;
      } catch (error) {
        console.log(error.response);
        this.error = error.response.data.error;
        this.loading = false;
      }
    },
    // register() {
    //   console.log('register button was clicked', this.email, this.password);
    //   const { email, password } = this;
    //   authenticationService.register({ email, password })
    //     .then(response => console.log(response));
    // },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
