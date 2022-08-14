import React from 'react';
import LoginLayout from '../../common/components/layout/LoginLayout';
import { Constants, FormContext, LoginForm, RoutePaths } from './index';

const Login = () => (
  <LoginLayout>
    <FormContext.Provider
      value={{
        name: Constants.SIGN_IN,
        alternateUrl: RoutePaths.SIGNUP,
        alternateName: Constants.SIGN_UP,
      }}
    >
      <LoginForm />
    </FormContext.Provider>
  </LoginLayout>
);

export default Login;
