import axios from 'axios';
import toast from '../../../app/toast';
import {
  getCurrentUser,
  setUserTicket,
} from '../../../auth/services/AuthService';
import { Constants } from '../../signup';

const ResetService = {
  resetPassword: async (formData) => {
    const email = localStorage.getItem('email');
    const response = await axios.post('/user/resetPassword', {
      ...formData,
      email,
    });
    console.log(response.data);
    if (!response.data || !response.data?.accessToken) {
      toast.error(Constants.ERROR_RESET_PASSWORD);
      console.error(Constants.ERROR_RESET_PASSWORD);
      return null;
    }
    localStorage.removeItem('email');
    setUserTicket(response.data.accessToken);
    return getCurrentUser();
  },
};

export default ResetService;
