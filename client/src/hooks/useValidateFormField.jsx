import { useState } from 'react';
import Constants from '../helper/Constants';

const useValidateFormField = () => {
  const [errorFields, setErrorFields] = useState([]);
  //   const [helperText, setHelperText] = useState(Constants.FORM_FILL);
  const helperText = Constants.FORM_FILL;

  const hasError = (data, fieldName) => {
    if (!data[fieldName]) {
      setErrorFields((prev) => [...prev, fieldName]);
      return true;
    }
    setErrorFields((prev) => prev.filter((field) => field !== fieldName));
    return false;
  };

  return { errorFields, helperText, hasError };
};

export default useValidateFormField;
