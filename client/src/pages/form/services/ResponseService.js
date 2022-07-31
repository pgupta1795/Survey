import axios from 'axios';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
} from '../../../auth/services/AuthService';
import { Constants } from '../../signup';

export default {
  getViewFormUrl: (id) => `/s/${id}`,

  submitResponse: async (data) => {
    const response = await axios.post('/response/submitResponse', data);
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponse: async (formId) => {
    const response = await axios.get(
      `/response/getresponse/${formId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getAllResponses: async () => {
    const response = await axios.get(`/response/responses`, getAuthHeader());
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getPendingResponse: async () => {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(
      `/response/getPendingResponse/${userId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponseByCompany: async (formId) => {
    try {
      const user = getCurrentUser();
      const id = user?.id;
      if (!user) {
        toast.error(Constants.ERROR_NO_USER);
        return console.error(Constants.ERROR_NO_USER);
      }
      const response = await axios.get(
        `/response/getResponseByCompany/${formId}/${id}`,
        getAuthHeader()
      );
      if (response.status !== 200) {
        toast.error(response.data);
        return null;
      }
      return response?.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
