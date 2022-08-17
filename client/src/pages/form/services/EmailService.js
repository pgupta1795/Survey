import axios from 'axios';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
} from '../../../auth/services/AuthService';

const BASE_URL = '/api/email';

export default {
  sendForm: async (data) => {
    const userId = getCurrentUser()?.id;
    const response = await axios.post(
      `${BASE_URL}/sendForm`,
      { ...data, userId },
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      console.error(response.data);
      return null;
    }
    return response.data;
  },

  sendPDFEmail: async (pdf) => {
    const out = pdf.output('datauristring');
    const userId = getCurrentUser()?.id;
    const response = await axios.post(
      `${BASE_URL}/sendReport/${userId}`,
      {
        pdf: out.split('base64,')[1],
      },
      getAuthHeader()
    );
    if (response.status !== 200) {
      console.error(response);
      throw new Error(response);
    }
    return response.data;
  },
};
