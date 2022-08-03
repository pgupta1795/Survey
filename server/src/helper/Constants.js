const Constants = Object.freeze({
  EMPTY_STRING: '',
  ANONYMOUS: 'anonymous',
  RADIO: 'RADIO',
  ID: '_id',

  //MESSAGES
  NODE_STARTED: `\u{1F525}\u{1F680} app listen on port ${process.env.PORT} \u{1F525}\u{1F680}`,
  DB_STARTED: `\u{1F525}\u{1F680} Database Connected \u{1F525}\u{1F680}`,
  ROUTER_OK: 'Your router.js is working',
  FORM_DELETED: 'Form Deleted',

  //ERRORS
  ERROR_LOGIN_FAILED: 'Invalid Credentials',
  ERROR_NO_USER: 'Username or Password not found',
  ERROR_USER_EXISTS: 'User already exists',
  ERROR_NO_USERS: 'Users not found',
  ERROR_NO_FORM: 'Form not found',
  ERROR_FORM_NOT_FOUND: 'Form not found or already deleted',
  ERROR_FORM_AUTH_ERROR: 'You are not the owner of this Form',
  ERROR_SUBMIT_RESPONSE: 'Please Fill atleast one field',
  ERROR_NO_EMAIL: 'Your Email not found',
  ERROR_TOKEN_EXPIRED: 'Invalid or expired password reset token',
  ERROR_TOKEN_NOT_CREATED:
    'Unable to Create token for resetting the user password',
});

module.exports = Constants;
