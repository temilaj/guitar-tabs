// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';

import Vue from 'vue';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import VueYouTubeEmbed from 'vue-youtube-embed';
import store from '@/store/store';
import Panel from '@/components/global/Panel';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);
// if you don't want install the component globally
// Vue.use(VueYouTubeEmbed, { global: false });
Vue.use(Vuetify);
Vue.component('Panel', Panel);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
