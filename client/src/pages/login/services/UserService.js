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
    const response = await axios.post(`${BASE_URL}/login`, formData);
    if (response.data?.error) throw new Error(response.data?.error);
    if (!response.data?.accessToken) throw new Error(Constants.ERROR_AUTH_USER);
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },

  async signup(formData) {
    const response = await axios.post(`${BASE_URL}/signup`, formData);
    if (response.data?.error) throw new Error(response.data?.error);
    if (!response.data?.accessToken) throw new Error(Constants.ERROR_AUTH_USER);
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },

  logout() {
    localStorage.removeItem('userTicket');
  },

  getOrganizations: async () => {
    const response = await axios.get(
      `${BASE_URL}/organizations`,
      getAuthHeader()
    );
    if (response.status === 200) return response.data?.organizations;
    toast.error(response.data);
    console.error(response.data);
    throw new Error('Unable to fetch organizations currently');
  },

  updateDetails: async (formData) => {
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
  },
};
