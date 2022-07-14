import * as React from 'react';
import { LoginLayout, Constants, TokenForm } from './index';
import { FormContext } from '../../hooks/contexts';

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
