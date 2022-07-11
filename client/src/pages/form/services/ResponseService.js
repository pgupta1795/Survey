import axios from 'axios';

export default {
  getViewFormUrl: (id) => `/form/s/${id}`,

  submitResponse: async (data) => {
    const response = await axios.post('/response/addresponse', data);
    return response.data;
  },

  getResponse: async (formId) => {
    const response = await axios.get(`/response/getresponse/${formId}`);
    return response.data;
  },

  getAllResponses: async () => {
    const response = await axios.get(`/response/responses`);
    return response.data;
  },
};
