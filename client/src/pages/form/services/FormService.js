import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import toast from '../../../app/toast';
import {
  getAuthHeader,
  getCurrentUser,
} from '../../../auth/services/AuthService';
import { Constants } from '../../login';

export default {
  getFormUrl: (id) => `/createform/${id}`,

  getFormByUser: async (userId) => {
    const response = await axios.get(
      `/form/getuserforms/${userId}`,
      getAuthHeader()
    );
    if (response?.status !== 200) {
      toast.error(Constants.ERROR_GET_FORM);
      return console.error(Constants.ERROR_GET_FORM);
    }
    return response?.data;
  },

  createForm: async () => {
    try {
      const user = getCurrentUser();
      const id = user?.id;
      if (!id) {
        toast.error(Constants.ERROR_NO_USER);
        return console.error(Constants.ERROR_NO_USER);
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
      const response = await axios.post(
        `/form/create/${id}`,
        data,
        getAuthHeader()
      );
      if (response?.status !== 200) {
        toast.error(Constants.ERROR_CREATE_FORM);
        return console.error(Constants.ERROR_CREATE_FORM);
      }
      return response?.data;
    } catch (error) {
      console.error(error);
      toast.error(error);
      throw error;
    }
  },

  getFormById: async (formId) => {
    const response = await axios.get(`/form/${formId}`, getAuthHeader());
    if (response?.status !== 200) {
      toast.error(Constants.ERROR_GET_FORM);
      return console.error(Constants.ERROR_GET_FORM);
    }
    return response?.data;
  },

  autoSave: async (data) => {
    const response = await axios.put('/form/editform/', data, getAuthHeader());
    if (response?.status !== 200) {
      toast.error(Constants.ERROR_SAVE_CREATEFORM);
      return console.error(Constants.ERROR_SAVE_CREATEFORM);
    }
    return response?.data;
  },

  uploadImage: async (image) => {
    const data = new FormData();
    data.append('myfile', image);
    const response = await axios.post('/image', data, getAuthHeader());
    if (response.status !== 200) {
      console.error(response);
      throw new Error(response);
    }
    return response.data;
  },

  deleteForm: async (formId) => {
    const user = getCurrentUser();
    const id = user?.id;
    if (!id) {
      toast.error(Constants.ERROR_NO_USER);
      return console.error(Constants.ERROR_NO_USER);
    }
    const response = await axios.delete(
      `/form/deleteform/${formId}/${id}`,
      getAuthHeader()
    );
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    console.log(response.data);
    return response?.data;
  },

  getForms: async (formType) => {
    const response = await axios.get(
      `/form/allforms/${formType}`,
      getAuthHeader()
    );
    console.log(response.data);
    if (response.status !== 200) {
      toast.error(response.data);
      return console.error(response.data);
    }
    return response?.data;
  },
};
