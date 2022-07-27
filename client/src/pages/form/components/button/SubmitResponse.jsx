import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import toast from '../../../../app/toast';
import FormUtils from '../../utils/FormUtils';
import { submitResponse } from '../../utils/ResponseUtils';
import { Constants } from '../tab';

const SubmitResponse = ({ formData, setIsSubmitted, sectionData }) => {
  const [disabled, setDisabled] = useState(true);
  const submit = async () => {
    const data = await submitResponse(formData, sectionData);
    setIsSubmitted(true);
    console.log(data);
    toast.info(Constants.RES_SUBMIT);
  };

  useEffect(() => {
    const allQuestions = FormUtils.getAllQuestions(formData);
    const allResponses = FormUtils.getAllResponses(sectionData);
    console.log({ allQuestions });
    console.log({ allResponses });

    if (allQuestions?.length === allResponses?.length) {
      setDisabled(FormUtils.hasIncompleteQuestion(allQuestions, allResponses));
    }

    return () => {
      setDisabled(true);
    };
  }, [formData, sectionData]);

  return (
    <Button
      fullWidth
      disabled={disabled}
      variant="contained"
      color="primary"
      onClick={submit}
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
