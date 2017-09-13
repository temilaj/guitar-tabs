import api from '@/services/api';
// import api from './api';

export default {
  getAllSongs() {
    return api().get('songs');
  },
  addSong(song) {
    return api().post('songs', song);
  },
  getSong(songId) {
    return api().get(`/songs/${songId}`);
  },

};
