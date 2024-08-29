const RoutePaths = Object.freeze({
  ERROR: '*',
  LOGIN: '/',
  USER: '/user/:userId',
  SIGNUP: '/signup',
  RESET_PASSWORD: '/resetPassword',
  GENERATE_TOKEN: '/generateToken',
  DASHBAORD: '/dashboard',
  FORM: '/cform',
  CREATE: 'create/:formId',
  RESPONSE: 'response/:formId',
  SUBMIT_FORM: '/s/:type/:formId',
  THANKS: '/s/:type/:formId/:userId',
  REPORT: '/report/:formId/:userId',
});

export default RoutePaths;
