<template>
  <v-flex md7>
    <Panel title="Tab">
      <div>{{ tab }}</div>
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
      'tab',
    ],
    mounted() {
      // console.log(lyrics);
    },
  };
</script>

<style scoped>
  
</style>
