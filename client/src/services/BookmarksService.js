import api from '@/services/api';

export default {
  getBookmark(bookmark) {
    return api().get('bookmarks', { params: bookmark });
  },
  addBookmark(bookmark) {
    return api().post('bookmarks', { params: bookmark });
  },
  removeBookmark(bookMarkId) {
    return api().delete(`bookmarks/${bookMarkId}`);
  },
};
