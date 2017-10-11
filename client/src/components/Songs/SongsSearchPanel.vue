<template>
  <Panel title="Search">
    <div class="pl-3 pr-3">
      <v-text-field placeholder="search by title, artist, album or genre" v-model="search"></v-text-field>
    </div>
  </Panel>
</template>

<script>

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search() {
      const route = {
        name: 'songs',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
        this.$router.push(route);
      }
    },
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

