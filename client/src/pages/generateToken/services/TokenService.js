import axios from 'axios';

const TokenService = {
  sendToken: async (formData) => {
    const { email } = formData;
    localStorage.setItem('email', email);
    const response = await axios.get(`/email/sendResetToken/${email}`);
    console.log(response.data);
    if (!response.data) {
      console.log('Unable to generate response');
      return response;
    }
    return response.data;
  },
};

export default TokenService;
