<template>
  <Panel title="Search">
    <div class="pl-3 pr-3">
      <v-text-field placeholder="search by title, artist, album or genre" v-model="search"></v-text-field>
    </div>
  </Panel>
</template>

<script>
import lodash from 'lodash';

export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search: lodash.debounce(async function () {
      const route = {
        name: 'songs',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
        this.$router.push(route);
      }
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

