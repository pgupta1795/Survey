import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { submitResponse } from '../../utils/ResponseUtils';

const SubmitResponse = ({ formData, setIsSubmitted, sectionData }) => {
  const submit = async () => {
    const data = submitResponse(formData, sectionData);
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={submit}
      sx={{ mt: 2 }}
    >
      Submit
    </Button>
  );
};

SubmitResponse.defaultProps = {
  formData: null,
};

SubmitResponse.propTypes = {
  formData: PropTypes.object,
  setIsSubmitted: PropTypes.func.isRequired,
  sectionData: PropTypes.array.isRequired,
};
export default SubmitResponse;
