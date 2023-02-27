<template>
  <v-app>
    <header-bar></header-bar>
    <v-main>
      <router-view/>
    </v-main>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>
import FooterBar from '@/components/shared/FooterBar.vue';
import HeaderBar from '@/components/shared/HeaderBar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    FooterBar,
    HeaderBar,
  }
};
</script>

<style>

</style>
