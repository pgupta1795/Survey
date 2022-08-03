import { getCurrentUser } from '../../../auth/services/AuthService';

export default {
  getUrl: (formId) => `/report/${formId}/${getCurrentUser()?.id}`,

  getUrlByUser: (formId, userId) => `/report/${formId}/${userId}`,
};
