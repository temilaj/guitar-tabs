<template>
  <v-toolbar dark fixed class="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text home">
      <span @click="navigateTo('root')">
        Guitar Tabs 
      </span>    
    </v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat @click="navigateTo('root')">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-if="!$store.state.isUserLoggedIn">
      <!-- <router-link to="/register"> -->
        <v-btn flat @click="navigateTo('register')">
            SignUp
        </v-btn>
      <!-- </router-link> -->
      <v-btn flat @click="navigateTo('login')">Login</v-btn>
    </v-toolbar-items>
    <v-btn dark icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    methods: {
      navigateTo(route) {
        // console.log(route);
        this.$router.push({ name: route });
      },
    },
  };
</script>
<style scoped>
  .home {
    cursor: pointer;
    
  }
</style>
