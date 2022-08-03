const RoutePaths = Object.freeze({
  ERROR: '*',
  LOGIN: '/',
  SIGNUP: '/signup',
  RESET_PASSWORD: '/resetPassword',
  GENERATE_TOKEN: '/generateToken',
  DASHBAORD: '/dashboard',
  FORM: '/createform/:formId',
  SUBMIT_FORM: '/s/:formId',
  THANKS: '/s/:formId/:userId',
  REPORT: '/report/:formId/:userId',
});

export default RoutePaths;
