<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <!-- <div class="white elevation-2">
        <v-toolbar dense class="primary" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4">
          <form>
            <v-text-field type="email" label="email" name="email" v-model="email"></v-text-field>
            <br>
            <v-text-field type="password" label="password" name="password" v-model="password" autocomplete="new-password"></v-text-field>
            <br>
            <v-alert error value="true" v-if="error" transition="scale-transition">
              {{ error }}
            </v-alert>
            <v-alert success value="true" v-if="success" transition="scale-transition">
              {{ success }}
            </v-alert>
            <br>
            <v-btn
              success
              :loading="loading"
              @click.native="loader = 'loading'"
              @click="register"
              :disabled="loading"
              class="white--text"
              >
              Register
            </v-btn>
          </form>
        </div>
      </div> -->
      <Panel title="Register">
        <form class="pl-3 pr-3">
          <v-text-field type="email" label="email" name="email" v-model="email"></v-text-field>
          <br>
          <v-text-field type="password" label="password" name="password" v-model="password" autocomplete="new-password"></v-text-field>
          <br>
          <v-alert error value="true" v-if="error" transition="scale-transition">
            {{ error }}
          </v-alert>
          <v-alert success value="true" v-if="success" transition="scale-transition">
            {{ success }}
          </v-alert>
          <br>
          <v-btn
            success
            :loading="loading"
            @click.native="loader = 'loading'"
            @click="register"
            :disabled="loading"
            class="white--text"
            >
            Register
          </v-btn>
        </form>
      </Panel>
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
      success: '',
      loading: false,
    };
  },
  beforeMount() {
    if (this.$store.state.isUserLoggedIn) {
      this.$router.push({ name: 'root' });
    }
  },
  // watch: {
  //   email(value) {
  //     console.log(`email has changed ${value}`);
  //   },
  // },
  methods: {
    async register() {
      this.loading = true;
      try {
        const { email, password } = this;
        // await authenticationService.register({ email, password });
        const response = await authenticationService.register({ email, password });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.success = response.data.message;
        this.error = '';
        this.loading = false;
        this.$router.push({ name: 'root' });
      } catch (error) {
        this.error = error.response.data.error;
        this.loading = false;
      }
    },
    // register() {
    //   console.log('register button was clicked', this.email, this.password);
    //   const { email, password } = this;
    //   authenticationService.register({ email, password })
    //     .then(success => console.log(response));
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
