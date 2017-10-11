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
        @click="navigateTo({name: 'song-edit', params: { songId: song.id }})">
        Edit</v-btn>
      </v-card-actions>
    </v-card>
    </Panel>
  </v-flex>
</template>

<script>
  import Panel from '@/components/Panel';
  
  export default {
    components: {
      Panel,
    },
    props: [
      'song',
    ],
    methods: {
      navigateTo(route) {
        this.$router.push(route);
      },
    },
  };
</script>
