import axios from 'axios';
import {
  getCurrentUser,
  setUserTicket,
} from '../../../auth/services/AuthService';

const ResetService = {
  resetPassword: async (formData) => {
    const email = localStorage.getItem('email');
    const response = await axios.post('/user/resetPassword', {
      ...formData,
      email,
    });
    console.log(response.data);
    if (!response.data || !response.data?.accessToken) {
      return null;
    }
    localStorage.removeItem('email');
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },
};

export default ResetService;
