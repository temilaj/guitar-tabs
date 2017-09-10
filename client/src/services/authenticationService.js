import api from '@/services/api';
// import api from './api';

export default {
  register(credentials) {
    return api().post('register', credentials);
  },
  login(credentials) {
    return api().post('login', credentials);
  },
};
