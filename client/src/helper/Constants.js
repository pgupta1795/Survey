const Constants = Object.freeze({
  COPYRIGHT: 'Copyright © ',
  DONT_HAVE_ACCOUNT: "Don't have an account? ",
  FORGOT_PASSWORD: 'Forgot password?',
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
  RESET_PASSWORD: 'Reset Password',
  GENERATE_TOKEN: 'Generate Token',
  DEFAULT_QUESTION: {
    text: 'Question',
    image: '',
    open: false,
  },
  DEFAULT_OPTION_1: { text: 'Option 1', image: '' },
  DEFAULT_OPTION_2: { text: 'Option 2', image: '' },
  DEFAULT_SECTION: {
    name: 'Untitled Form',
    description: 'Form Description',
  },
  DEFAULT_FORM: {
    name: 'PLM Maturity Survey',
  },
  ANONYMOUS: 'anonymous',

  // Send Email Constants
  TO: 'To',
  SUBJECT: 'Subject',
  MESSAGE: 'Message',
  DEFAULT_MESSAGE: "I've invited you to fill in a form",

  //  ********************************* MESSAGE CONSTANTS ********************************************

  /** GENERAL */
  FORM_FILL: 'Please fill',
  RES_SUBMIT: 'RESPONSE SUBMITTED',
  TOKEN_OK: 'Token Generated',
  LOGIN_OK: 'USER LOGGED IN',
  LOGIN_NOT_OK: 'USER LOGGED FAILED',
  RESETTED_PASSWORD: 'RESETTED PASSWORD',
  SAVING: 'Saving ...',
  SAVED: 'Saved',
  SECTION_ADDED: 'Section Added',
  SECTION_DELETED: 'Section Deleted',
  COPIED: 'Copied To Clipboard',
  SENDING: 'Sending...',
  MAIL_SENT: 'Email Sent',

  /** WARNING */
  WARNING_INCORRECT_URL: 'Unable to access url',

  /** ERROR */
  ERROR_AUTH_USER:
    'Authentication Error : Please validate Username or Password',
  ERROR_NO_USER: 'Error : User does not Exist',
  ERROR_SAVE_FORM: 'Error : Unable to save response currently',
  ERROR_SUBMIT_FORM: 'Error : Unable to submit response currently',
  ERROR_GET_FORM: 'Error Fetching User Form',
  ERROR_CREATE_FORM: 'Error Creating Form',
  ERROR_SAVE_CREATEFORM: 'Error Saving Form',
  ERROR_GENERATE_TOKEN: 'Error : Token Generation failed',
  ERROR_GET_RESPONSE: 'Error : Unable to generate response',
  ERROR_RESET_PASSWORD: 'Error : Unable to reset password',
  ERROR_SEND_FORM: 'Error : Unable to Send form',
});

export default Constants;
