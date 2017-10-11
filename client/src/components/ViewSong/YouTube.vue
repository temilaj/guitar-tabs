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
  export default {
    props: [
      'song',
    ],
  };
</script>

<style scoped>
  
</style>
