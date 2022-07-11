import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentUser } from '../../../auth/services/AuthService';
import { Constants } from '../../login';

export default {
  getFormUrl: (id) => `/form/${id}`,

  getFormByUser: async (userId) => {
    const response = await axios.get(`/form/getuserforms/${userId}`);
    console.log(response.data);
    return response?.data;
  },

  createForm: async () => {
    const user = getCurrentUser();
    const id = user?.id;
    if (!id) {
      console.error('User id cannot be found');
      return null;
    }
    const response = await axios.post(`/form/create/${id}`, {
      ...Constants.DEFAULT_FORM,
      createdBy: user?.name,
      _id: uuidv4(),
    });
    console.log(response.data);
    return response?.data;
  },

  getFormById: async (formId) => {
    const response = await axios.get(`/form/${formId}`);
    console.log(response.data);
    return response?.data;
  },

  autoSave: async (data) => {
    const response = await axios.put('/form/editform/', data);
    console.log(response.data);
    return response?.data;
  },

  uploadImage: async (image) => {
    const data = new FormData();
    data.append('myfile', image);
    const response = await axios.post('/image', data, {});
    return response.data;
  },
};
