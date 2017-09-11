import api from '@/services/api';
// import api from './api';

export default {
  getAllSongs() {
    return api().get('songs');
  },
};
