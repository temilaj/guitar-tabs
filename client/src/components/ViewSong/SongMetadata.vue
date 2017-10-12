<template>
  <v-flex md5 class="mr-4">
    <Panel v-if="song" :title="song.title">
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
        <v-btn flat class="orange--text" 
        :to="{name: 'song-edit', params: { songId: song.id }}">
        Edit</v-btn>
        <v-btn flat icon color="indigo" @click="bookmark" v-if="isUserLoggedIn && !this.isBookMarked">
          <v-icon dark>playlist_add</v-icon>
        </v-btn> 
        <v-btn flat icon color="indigo" @click="bookmark" v-if="isUserLoggedIn && this.isBookMarked">
          <v-icon >playlist_add</v-icon>
        </v-btn> 
      </v-card-actions>
    </v-card>
    </Panel>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';
import BookmarksService from '@/services/BookmarksService';

export default {
  data() {
    return {
      isBookMarked: false,
    };
  },
  props: [
    'song',
  ],
  computed: {
    ...mapState([
      'isUserLoggedIn',
    ]),
  },
  async mounted() {
    if (!this.isUserLoggedIn) {
      return;
    }
    const bookmark = (await BookmarksService.getBookmark({
      songId: this.song.id,
      userId: this.$store.state.user.id,
    })).data.bookmark;
    this.isBookMarked = !!bookmark;
    console.log('bookmark', this.isBookMarked);
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async bookmark() {
      try {
        await BookmarksService.addBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async unBookmark() {
      try {
        await BookmarksService.removeBookmark({
          songId: this.song.id,
          userId: this.$store.state.user.id,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
