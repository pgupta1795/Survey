import {
  getCurrentUser,
  getOrganization,
} from '../../../auth/services/AuthService';

export default {
  getUrl: (formId) => {
    const userId = getCurrentUser()?.id;
    const organization = getOrganization();
    const year = new Date().getFullYear();
    return `/report/${formId}/${userId}?year=${year}&organization=${organization}`;
  },

  getUrlByUser: (formId, userId) => `/report/${formId}/${userId}`,
};
