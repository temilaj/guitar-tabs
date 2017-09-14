<template>
  <div>
    <v-layout>
      <song-metadata :song="song"/>
      <you-tube :song="song" />
      <!-- <v-flex md7>
        <v-tabs dark fixed centered>
          <v-tabs-bar class="primary">
            <v-tabs-slider class="yellow"></v-tabs-slider>
            <v-tabs-item href="#tab">
              Tab
            </v-tabs-item>
            <v-tabs-item href="#lyrics">
              Lyrics
            </v-tabs-item>
          </v-tabs-bar>
          <v-tabs-items>
            <v-tabs-content id="tab">
              <v-card flat>
                <v-card-text>{{ song.tab }}</v-card-text>
              </v-card>
            </v-tabs-content>
            <v-tabs-content id="lyrics">
              <v-card flat>
                <v-card-text>{{ song.lyrics }}</v-card-text>
              </v-card>
            </v-tabs-content>
          </v-tabs-items>
        </v-tabs>
      </v-flex> -->
      <!-- <v-flex md6 offset-md1 v-if="song.title" transition="slide-x-transition">
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
      </v-flex> -->
    </v-layout>
    <v-layout>
      <lyrics :lyrics="song.lyrics"/>
    </v-layout>
  </div>
</template>

<script>
  import Panel from '@/components/Panel';
  import Lyrics from '@/components/ViewSong/Lyrics';
  import SongMetadata from '@/components/ViewSong/SongMetadata';
  import YouTube from '@/components/ViewSong/YouTube';
  import SongsService from '@/services/SongService';

  export default {
    data() {
      return {
        song: null,
        // {
        //   title: '',
        //   album: '',
        //   genre: '',
        //   artist: '',
        //   youtubeId: '',
        //   albumImageUrl: '',
        //   lyrics: '',
        //   tab: '',
        // },
        required: value => !!value || 'Required.',
        error: null,
        success: null,
        loading: false,
      };
    },
    components: {
      Panel,
      SongMetadata,
      YouTube,
      Lyrics,
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
    },
  };
</script>
