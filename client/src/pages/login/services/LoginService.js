import axios from 'axios';
import toast from '../../../app/toast';
import {
  getCurrentUser,
  setUserTicket,
} from '../../../auth/services/AuthService';
import { Constants } from '../../signup';

export default {
  async login(formData) {
    try {
      const response = await axios.post('/user/login', formData);
      console.log(response.data);
      if (!response.data || !response.data?.accessToken) {
        throw new Error(Constants.ERROR_AUTH_USER);
      }
      setUserTicket(response.data.accessToken);
      return getCurrentUser();
    } catch (error) {
      console.error(error);
      toast.default(error);
      return null;
    }
  },

  async signup(formData) {
    try {
      const response = await axios.post('/user/signup', formData);
      console.log(response.data);
      if (!response.data?.accessToken) {
        throw new Error(Constants.ERROR_AUTH_USER);
      }
      setUserTicket(response.data.accessToken);
      return getCurrentUser();
    } catch (error) {
      console.error(error);
      toast.error(error);
      return null;
    }
  },

  logout() {
    localStorage.removeItem('userTicket');
  },
};
