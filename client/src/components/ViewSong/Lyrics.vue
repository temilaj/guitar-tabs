<template>
  <v-flex md7>
    <Panel title="Lyrics">
      <div>{{lyrics}}</div>
    </Panel>
  </v-flex>
</template>

<script>
  export default {
    props: [
      'lyrics',
    ],
    mounted() {
      // console.log(lyrics);
    },
  };
</script>

<style scoped>
  
</style>
