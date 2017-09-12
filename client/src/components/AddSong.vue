<template>
  <v-layout>
    <v-flex xs4>
      <Panel title="Song Metadata">
        <form>
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Album" v-model="album"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 md5>
              <v-text-field label="Genre" v-model="genre"></v-text-field>
            </v-flex>
            <v-flex xs12 offset-md1 md6>
              <v-text-field label="Artist" v-model="artist"></v-text-field>
            </v-flex>
          </v-layout>  
          <v-text-field label="YoutubeId" v-model="youtubeId"></v-text-field>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="AlbumImageUrl" v-model="albumImageUrl"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-avatar
              :tile=false
              size="80px"
              class="grey lighten-4"
              >
                <img :src="albumImageUrl" alt="avatar">
              </v-avatar>
            </v-flex>
          </v-layout>  
          <v-text-field label="Lyrics" multi-line  v-model="lyrics"></v-text-field>
          <v-text-field label="tab" multi-line v-model="tab"></v-text-field>

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
  </v-layout>
  <!-- <v-flex xs8>
     
  </v-flex> -->
  
</template>

<script>
  import Panel from '@/components/Panel';

  export default {
    data() {
      return {
        title: 'lanterns',
        album: 'The Boy Who Cried Wolf',
        genre: 'folk',
        artist: 'passenger',
        youtubeId: 'XxiFgNG8YPQ',
        albumImageUrl: 'http://images.genius.com/5c630c0d3a3f59ae8f3693a5edf71972.1000x1000x1.jpg',
        lyrics: '',
        tab: '',
        error: '',
        success: '',
        loading: false,
      };
    },
    components: {
      Panel,
    },
    methods: {
      create() {
        console.log('creating');
      },
    },
  };
</script>
