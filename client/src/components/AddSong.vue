<template>
  <v-layout>
    <v-flex md4 class="ml-10" transition="slide-x-transition">
      <Panel title="Song Metadata">
        <form>
          <v-text-field label="Title" v-model="song.title"></v-text-field>
          <v-text-field label="Album" v-model="song.album"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 md5>
              <v-text-field label="Genre" v-model="song.genre"></v-text-field>
            </v-flex>
            <v-flex xs12 offset-md1 md6>
              <v-text-field label="Artist" v-model="song.artist"></v-text-field>
            </v-flex>
          </v-layout>  
          <v-text-field label="YoutubeId" v-model="song.youtubeId"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="AlbumImageUrl" v-model="song.albumImageUrl"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4 :if="song.albumImageUrl">
              <v-avatar
              :tile=false
              size="80px"
              class="grey lighten-4"
              >
                <img :src="song.albumImageUrl" alt="avatar">
              </v-avatar>
            </v-flex>
          </v-layout>  
          <v-text-field label="Lyrics" multi-line  v-model="song.lyrics"></v-text-field>
          <v-text-field label="tab" multi-line v-model="song.tab"></v-text-field>

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
            @click="create"
            :disabled="loading"
            class="white--text"
            >
            Create
          </v-btn>
        </form>
      </Panel>
    </v-flex>
    <v-flex md6 offset-md1 v-if="song.title" transition="slide-x-transition">
      <v-card>
        <v-card-media
          class="white--text"
          height="500px"
          :src="song.albumImageUrl"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <h2 class="song">{{ song.title }}</h2>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{ song.title }}</span><br>
            <span>{{ song.album }}</span><br>
            <span>{{ song.artist }}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat class="orange--text">
            View on Youtube
          </v-btn>
          <v-btn flat class="orange--text">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  <!-- <v-flex xs8>
     
  </v-flex> -->
  
</template>

<script>
  import Panel from '@/components/Panel';
  import SongsService from '@/services/SongService';

  export default {
    data() {
      return {
        song: {
          title: '',
          album: '',
          genre: '',
          artist: '',
          youtubeId: '',
          albumImageUrl: '',
          lyrics: '',
          tab: '',
        },
        error: '',
        success: '',
        loading: false,
      };
    },
    components: {
      Panel,
    },
    methods: {
      async create() {
        try {
          const response = await SongsService.addSong(this.song);
          this.success = response.data.message;
          this.error = '';
          this.loading = false;
          this.$router.push({ name: 'songs' });
        } catch (error) {
          this.error = error.response.data.error;
          this.loading = false;
        }
      },
    },
  };
</script>
