import React, { createRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const useReCaptcha = () => {
  const [token, setToken] = useState('');
  const reRef = createRef();

  return {
    token,
    reRef,
    render: (
      <ReCAPTCHA
        sitekey="6Lc2OlYmAAAAACHYNI465egATSOE8uHvMRMskwxp"
        size="normal"
        ref={reRef}
        onChange={(value) => {
          setToken(value);
        }}
        onErrored={(value) => {
          setToken(value);
        }}
        className="scale-90"
      />
    ),
  };
};

export default useReCaptcha;
