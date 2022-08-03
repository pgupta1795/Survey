import { getCurrentUser } from '../../../auth/services/AuthService';

export default {
  getUrl: (formId) => `/s/${formId}/${getCurrentUser()?.id}`,
};
