<template>
  <Panel title="Songs">
    <div slot="action">
      <router-link :to="{name: 'add-song'}">
        <v-icon dark>playlist_add</v-icon>
      </router-link>
    </div>
    <v-list three-line>
      <template v-for="song in songs">
        <v-subheader :key="song.id" v-text="song.artist"></v-subheader>
        <v-divider :key="song.id" v-bind:inset="true"></v-divider>
        
        <v-list-tile 
          avatar 
          v-bind:key="song.title" 
          @click="navigateTo({ 
            name: 'song', 
            params: {
              songId: song.id
            }
          })">
          <v-list-tile-avatar v-if="song.albumImageUrl">
            <img v-bind:src="song.albumImageUrl"/>
          </v-list-tile-avatar>

          <v-list-tile-avatar v-else>
            <v-icon class="grey lighten-1 white--text">library_music</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="song.title"></v-list-tile-title>
            <v-list-tile-sub-title v-text="song.album"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </Panel>
</template>

<script>
  import SongsService from '@/services/SongService';

  export default {
    data() {
      return {
        songs: [],
      };
    },
    async mounted() {
      this.songs = (await SongsService.getAllSongs()).data.songs;
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
</script>