import axios from 'axios';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
  setUserTicket,
} from '../../../auth/services/AuthService';
import { Constants } from '../../signup';

const BASE_URL = '/api/user';

export default {
  getUserUrl: () => {
    const { id } = getCurrentUser();
    return `user/${id}`;
  },

  async login(formData) {
    try {
      const response = await axios.post(`${BASE_URL}/login`, formData);
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
      const response = await axios.post(`${BASE_URL}/signup`, formData);
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

  getOrganizations: async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/organizations`,
        getAuthHeader()
      );
      if (response.status !== 200) {
        toast.error(response.data);
        return console.error(response.data);
      }
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  updateDetails: async (formData) => {
    try {
      const user = getCurrentUser();
      const userId = user?.id;
      const response = await axios.post(
        `${BASE_URL}/updateDetails`,
        { ...formData, userId },
        getAuthHeader()
      );
      if (response.status !== 200) {
        console.error(response.data);
        throw response?.data;
      }
      setUserTicket(response.data?.accessToken);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
