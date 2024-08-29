const Constants = Object.freeze({
  /** PLM Report */
  TITLE: 'PLM Maturity Report',
  MATURITY_DESCRIPTION:
    'The PLM Maturity of your organisation gives insight in the maturity and extent in which PLM is embedded within your organisation. The maturity is measured over 5 dimensions. Each line represents a department within your organization',
  SCORES_DESCRIPTION:
    'The maturity scores of each dimension. A balanced maturity level is optimal. Utilizing a progressive scheme, low scores can be optimized for organizational maturity allignment.',
  SECTIONS: [
    {
      name: 'Strategy & Policy',
      description:
        'A PLM strategy is described and aligned with your organization strategy. The strategy is translated in an action plan and is adapted where needed',
    },
    {
      name: 'Management & Control',
      description:
        'Clear monitoring of time to market. Status of lifecycles of products is known and where metrics and processes for product quality are defined',
    },
    {
      name: 'Organization & Processes',
      description:
        'Procedures and processes are defined and standardised within the organization',
    },
    {
      name: 'People & Culture',
      description:
        'Task and job descriptions contain references to processes and procedures of the product lifecycle. Employees can raise suggestions for product lifecycle decisions',
    },
    {
      name: 'Information & Technology',
      description:
        'Software is implemented that supports the product lifecycle and is integrated with other information systems',
    },
  ],
  CATEGORY: [
    'R&D + EPD',
    'Supply chain & Fabriek',
    'Manufacturing Engineering & Quality',
  ],

  /** FORM */
  COPYRIGHT: 'Copyright © ',
  DONT_HAVE_ACCOUNT: "Don't have an account? ",
  HAVE_ACCOUNT: 'Already have an account? ',
  FORGOT_PASSWORD: 'Forgot password?',
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
  RESET_PASSWORD: 'Reset Password',
  GENERATE_TOKEN: 'Generate Verification Code',
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
  DEFAULT_FORM: { name: 'TECHNIA Survey' },
  ANONYMOUS: 'anonymous',

  /** Send Email Constants */
  TO: 'To',
  SUBJECT: 'Subject',
  MESSAGE: 'Message',
  DEFAULT_MESSAGE: 'TECHNIA has invited you to fill in a Assessment form',

  //  ********************************* MESSAGE CONSTANTS ********************************************

  /** GENERAL */
  FORM_FILL: 'Please fill',
  FORM_FILL_TEXT: 'Please write your answer',
  FORM_FILL_RADIO: 'Please select one option',
  FORM_FILL_CHECKBOX: 'Please select one or more option',
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
  PDF_CREATED: 'PDF created for email/download',
  FILTER_YEAR: 'Filter Responses By Year',

  /** Response Status */
  COMPLETED: 'Completed',
  TO_DO: 'To Do',
  PENDING: 'Pending',

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
