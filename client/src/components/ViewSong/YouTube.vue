<template>
  <v-flex md7>
    <Panel>
      <v-card>
      <youtube :video-id="youtubeId" :player-width="1000" :player-height="500"></youtube>
      <v-card-title>
        <div>
          <span class="grey--text">{{ youtubeId }}</span><br>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat class="orange--text">
          View on Youtube
        </v-btn>
        <v-btn flat class="orange--text">Explore</v-btn>
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
      'youtubeId',
    ],
  };
</script>
