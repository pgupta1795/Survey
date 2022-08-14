import React from 'react';
import LoginLayout from '../../common/components/layout/LoginLayout';
import { Constants, FormContext, RoutePaths, SignupForm } from './index';

const Signup = () => (
  <LoginLayout>
    <FormContext.Provider
      value={{
        name: Constants.SIGN_UP,
        alternateUrl: RoutePaths.LOGIN,
        alternateName: Constants.SIGN_IN,
      }}
    >
      <SignupForm />
    </FormContext.Provider>
  </LoginLayout>
);

export default Signup;
