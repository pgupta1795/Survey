import axios from 'axios';
import toast from '../../../app/toast';
import { getCurrentUser } from '../../../auth/services/AuthService';

export default {
  sendForm: async (data) => {
    const userId = getCurrentUser()?.id;
    const response = await axios.post('/email/sendForm', { ...data, userId });
    if (response.status !== 200) {
      toast.error(response.data);
      console.error(response.data);
      return null;
    }
    return response.data;
  },
};
