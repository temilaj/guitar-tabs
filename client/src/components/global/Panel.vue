<template>
  <div class="white elevation-2">
    <v-toolbar dense class="primary" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <slot name="action"/>
    </v-toolbar>
    <div>
      <slot>
        No slot content defined
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: [
    'title',
  ],
  methods: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
