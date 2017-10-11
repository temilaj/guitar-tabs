<template>
    <v-flex xs6 offset-xs3>
      <songs-search-panel/>
      <songs-panel class="mt-2"/>
    </v-flex>
</template>

<script>
  // import Panel from '@/components/Panel';
  import SongsPanel from '@/components/Songs/SongsPanel';
  import SongsSearchPanel from '@/components/Songs/SongsSearchPanel';
  // import SongsService from '@/services/SongService';

  export default {
    // data() {
    //   return {
    //     songs: [],
    //   };
    // },
    // async mounted() {
    //   this.songs = (await SongsService.getAllSongs()).data.songs;
    // },
    // methods: {
    //   navigateTo(route) {
    //     this.$router.push(route);
    //   },
    // },
    components: {
      SongsPanel,
      SongsSearchPanel,
    },
  };
</script>