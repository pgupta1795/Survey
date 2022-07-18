import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getCurrentUser } from '../../../auth/services/AuthService';
import { Constants } from '../../login';

export default {
  getFormUrl: (id) => `/createform/${id}`,

  getFormByUser: async (userId) => {
    const response = await axios.get(`/form/getuserforms/${userId}`);
    if (response?.status !== 200)
      return console.error('Error Getting User Form');
    return response?.data;
  },

  createForm: async () => {
    const user = getCurrentUser();
    const id = user?.id;
    if (!id) {
      console.error('User id cannot be found');
      return null;
    }
    const data = {
      ...Constants.DEFAULT_FORM,
      sections: [
        {
          _id: uuidv4(),
          ...Constants.DEFAULT_SECTION,
          questions: [
            {
              _id: uuidv4(),
              ...Constants.DEFAULT_QUESTION,
              options: [
                { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
                { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
              ],
            },
          ],
        },
      ],
      createdBy: id,
      _id: uuidv4(),
    };
    const response = await axios.post(`/form/create/${id}`, data);
    if (response?.status !== 200) return console.error('Error Creating Form');
    return response?.data;
  },

  getFormById: async (formId) => {
    const response = await axios.get(`/form/${formId}`);
    if (response?.status !== 200) return console.error('Error getting Form');
    return response?.data;
  },

  autoSave: async (data) => {
    const response = await axios.put('/form/editform/', data);
    if (response?.status !== 200) return console.error('Error saving Form');
    return response?.data;
  },

  uploadImage: async (image) => {
    const data = new FormData();
    data.append('myfile', image);
    const response = await axios.post('/image', data, {});
    return response.data;
  },

  deleteForm: async (formId) => {
    const user = getCurrentUser();
    const id = user?.id;
    if (!id) {
      console.error('User id cannot be found');
      return null;
    }
    const response = await axios.delete(`/form/deleteform/${formId}/${id}`);
    console.log(response.data);
    return response?.data;
  },

  getForms: async (formType) => {
    const response = await axios.get(`/form/allforms/${formType}`);
    console.log(response.data);
    return response?.data;
  },
};
