import axios from 'axios';
import {
  getCurrentUser,
  setUserTicket,
} from '../../../auth/services/AuthService';

export default {
  async login(formData) {
    const response = await axios.post('/user/login', formData);
    console.log(response.data);
    if (!response.data || !response.data?.accessToken) {
      return null;
    }
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },

  async signup(formData) {
    const response = await axios.post('/user/signup', formData);
    console.log(response.data);
    if (!response.data?.accessToken) {
      return null;
    }
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },

  logout() {
    localStorage.removeItem('userTicket');
  },
};
