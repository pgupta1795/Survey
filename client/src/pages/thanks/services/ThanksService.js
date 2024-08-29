import { getCurrentUser } from '../../../auth/services/AuthService';

export default {
  getUrl: (formId, type) => `/s/${type}/${formId}/${getCurrentUser()?.id}`,
};
