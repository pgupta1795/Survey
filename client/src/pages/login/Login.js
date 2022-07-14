import * as React from 'react';
import { LoginForm, Constants, FormContext, RoutePaths } from './index';
import LoginLayout from '../../common/components/layout/LoginLayout';

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
