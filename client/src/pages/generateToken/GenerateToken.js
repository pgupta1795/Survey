import React from 'react';
import { FormContext } from '../../hooks/contexts';
import { Constants, LoginLayout, TokenForm } from './index';

const GenerateToken = () => (
  <LoginLayout>
    <FormContext.Provider
      value={{
        name: Constants.GENERATE_TOKEN,
      }}
    >
      <TokenForm />
    </FormContext.Provider>
  </LoginLayout>
);

export default GenerateToken;
