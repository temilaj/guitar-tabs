<template>
  <v-layout>
    <v-flex md4 class="ml-10">
      <Panel title="Song Metadata">
        <form>
          <v-text-field required :rules="[required]"  label="Title" v-model="song.title"></v-text-field>
          <v-text-field required :rules="[required]"  label="Album" v-model="song.album"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 md5>
              <v-text-field required :rules="[required]" label="Genre" v-model="song.genre"></v-text-field>
            </v-flex>
            <v-flex xs12 offset-md1 md6>
              <v-text-field required :rules="[required]" label="Artist" v-model="song.artist"></v-text-field>
            </v-flex>
          </v-layout>  
          <v-text-field required :rules="[required]" label="YoutubeId" v-model="song.youtubeId"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field required :rules="[required]" label="AlbumImageUrl" v-model="song.albumImageUrl"></v-text-field>
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
          <v-text-field required :rules="[required]" label="Lyrics" multi-line  v-model="song.lyrics"></v-text-field>
          <v-text-field required :rules="[required]" label="tab" multi-line v-model="song.tab"></v-text-field>

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
            @click="save"
            :disabled="loading"
            class="white--text"
            >
            save song
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
        required: value => !!value || 'Required.',
        error: null,
        success: null,
        loading: false,
      };
    },
    async mounted() {
      try {
        const songId = this.$store.state.route.params.songId;
        const song = (await SongsService.getSong(songId)).data.song;
        this.song = song;
      } catch (error) {
        this.error = error.response.data.error;
        this.loading = false;
      }
    },
    methods: {
      async save() {
        this.error = null;
        this.loading = true;
        const areAllFieldsFilledIn = Object.keys(this.song)
        .every(key => !!this.song[key]);
        if (!areAllFieldsFilledIn) {
          this.error = 'Please fill in all required fields';
          return;
        }
        try {
          const response = await SongsService.saveSong(this.song);
          this.success = response.data.message;
          this.error = '';
          this.loading = false;
          this.$router.push({ name: 'song', params: { songId: this.song.id } });
        } catch (error) {
          this.error = error.response.data.error;
          this.loading = false;
        }
      },
    },
  };
</script>
