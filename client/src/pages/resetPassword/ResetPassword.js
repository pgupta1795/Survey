import * as React from 'react';
import { LoginLayout, Constants, ResetForm } from './index';
import { FormContext } from '../../hooks/contexts';

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
