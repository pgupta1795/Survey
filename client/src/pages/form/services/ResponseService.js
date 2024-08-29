import axios from 'axios';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
} from '../../../auth/services/AuthService';

const BASE_URL = '/api/response';

export default {
  getViewFormUrl: (id, type, responseId) => {
    if (responseId) return `/s/${type}/${id}?responseId=${responseId}`;
    return `/s/${type}/${id}`;
  },

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
      `${BASE_URL}/response/${formId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponsesByUser: async () => {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(
      `${BASE_URL}/responses/${userId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getPendingResponse: async () => {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(
      `${BASE_URL}/pendingResponse/${userId}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getResponseByCompany: async (formId, organization) => {
    try {
      const url = new URL(window.location.href);
      const paramOrganization = url.searchParams.get('organization');
      const response = await axios.get(
        `${BASE_URL}/responseByCompany/${formId}?organization=${
          paramOrganization || organization
        }`,
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
