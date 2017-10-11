<template>
  <v-flex md7>
    <Panel title="Lyrics">
      <div>{{lyrics}}</div>
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
      'lyrics',
    ],
    mounted() {
      // console.log(lyrics);
    },
  };
</script>

<style scoped>
  
</style>
