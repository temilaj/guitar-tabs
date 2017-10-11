<template>
  <Panel title="Search">
    <div slot="action">
      <router-link :to="{name: 'add-song'}">
        <v-icon dark>playlist_add</v-icon>
      </router-link>
    </div>
  </Panel>
</template>

<script>

export default {
};
</script>

