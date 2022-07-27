import axios from 'axios';
import toast from '../../../app/toast';
import { getCurrentUser } from '../../../auth/services/AuthService';

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
    const response = await axios.get(`/response/getresponse/${formId}`);
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getAllResponses: async () => {
    const response = await axios.get(`/response/responses`);
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },

  getPendingResponse: async () => {
    const userId = getCurrentUser()?.id;
    const response = await axios.get(`/response/getPendingResponse/${userId}`);
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response.data;
  },
};
