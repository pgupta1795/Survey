import * as React from 'react';
import { SignupForm, Constants, FormContext, RoutePaths } from './index';
import LoginLayout from '../../common/components/layout/LoginLayout';

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
