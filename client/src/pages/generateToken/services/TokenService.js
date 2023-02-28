import axios from 'axios';
import toast from '../../../app/toast';
import { getAuthHeader } from '../../../auth/services/AuthService';
import { Constants } from '../../signup';

const TokenService = {
  sendToken: async (formData) => {
    const { email } = formData;
    localStorage.setItem('email', email);
    const response = await axios.get(
      `/api/email/sendResetToken/${email}`,
      getAuthHeader()
    );
    console.log(response.data);
    if (!response.data) {
      toast.error(Constants.ERROR_GET_RESPONSE);
      console.error(Constants.ERROR_GET_RESPONSE);
      return response;
    }
    return response.data;
  },
};

export default TokenService;
