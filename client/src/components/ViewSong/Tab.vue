<template>
  <v-flex md7>
    <Panel title="Tab">
      <div>{{ tab }}</div>
    </Panel>
  </v-flex>
</template>

<script>
  export default {
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
