import api from '@/services/api';
// import api from './api';

export default {
  getSongs(queryString) {
    // return api().get('songs');
    return api().get('songs', {
      params: {
        search: queryString,
      },
    });
  },
  addSong(song) {
    return api().post('songs', song);
  },
  saveSong(song) {
    return api().put(`/songs/${song.id}`, song);
  },
  getSong(songId) {
    return api().get(`/songs/${songId}`);
  },
  search(queryString) {
    return api().get('songs', {
      params: {
        search: queryString,
      },
    });
  },
};
