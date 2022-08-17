import axios from 'axios';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
} from '../../../auth/services/AuthService';

const BASE_URL = '/api/response';

export default {
  getViewFormUrl: (id) => `/s/${id}`,

  submitResponse: async (data) => {
    const response = await axios.post(
      `${BASE_URL}/submitResponse`,
      data,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponse: async (formId) => {
    const response = await axios.get(
      `${BASE_URL}/getresponse/${formId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getAllResponses: async () => {
    const response = await axios.get(`${BASE_URL}/responses`, getAuthHeader());
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getPendingResponse: async () => {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(
      `${BASE_URL}/getPendingResponse/${userId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponseByCompany: async (formId, id) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/getResponseByCompany/${formId}/${id}`,
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
