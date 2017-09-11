<template>
<v-layout>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <div v-for="song in songs" :key="song.title">
          {{ song.title }}
          {{ song.artist }}
          {{ song.album }}
        </div>
      </Panel>
    </v-flex>
</v-layout>
</template>

<script>
  import Panel from '@/components/Panel';
  import SongsService from '@/services/SongsService';

  export default {
    data() {
      return {
        songs: [],
      };
    },
    async mounted() {
      this.songs = await SongsService.getAllSongs();
    },
    methods: {
    },
    components: {
      Panel,
    },
  };
</script>