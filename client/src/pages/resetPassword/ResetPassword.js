import React from 'react';
import { FormContext } from '../../hooks/contexts';
import { Constants, LoginLayout, ResetForm } from './index';

const ResetPassword = () => (
  <LoginLayout>
    <FormContext.Provider
      value={{
        name: Constants.RESET_PASSWORD,
      }}
    >
      <ResetForm />
    </FormContext.Provider>
  </LoginLayout>
);

export default ResetPassword;
