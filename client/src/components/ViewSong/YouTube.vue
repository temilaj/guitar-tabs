<template>
  <v-flex md7>
    <Panel>
      <v-card>
      <youtube v-if="song" :video-id="song.youtubeId"></youtube>
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
  };
</script>

<style scoped>
  
</style>
