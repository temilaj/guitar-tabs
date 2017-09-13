import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Songs from '@/components/Songs';
import AddSong from '@/components/AddSong';
import ViewSong from '@/components/ViewSong';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/songs/add',
      name: 'add-song',
      component: AddSong,
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong,
    },
  ],
});
