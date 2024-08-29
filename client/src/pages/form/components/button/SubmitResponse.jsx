import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from '../../../../app/toast';
import ThanksService from '../../../thanks/services/ThanksService';
import FormUtils from '../../utils/FormUtils';
import { submitResponse } from '../../utils/ResponseUtils';
import { Constants } from '../tab';

const SubmitResponse = ({ formData, sectionData, activeStep, maxSteps }) => {
  const [disabled, setDisabled] = useState(activeStep !== maxSteps - 1);
  const navigate = useNavigate();
  const { formId } = useParams();

  const submit = async () => {
    const data = await submitResponse(formData, sectionData);
    const url = ThanksService.getUrl(formId, formData?.type);
    navigate(url);
    console.log(data);
    toast.info(Constants.RES_SUBMIT);
  };

  useEffect(() => {
    const allQuestions = FormUtils.getAllQuestions(formData);
    const allResponses = FormUtils.getAllResponses(sectionData);
    if (allQuestions?.length === allResponses?.length) {
      setDisabled(FormUtils.hasIncompleteQuestion(allQuestions, allResponses));
    }

    return () => {
      setDisabled(true);
    };
  }, [formData, sectionData]);

  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ p: 1, mt: 2 }}
      disabled={disabled}
      color="primary"
      onClick={submit}
      className="px-3 w-[28.19rem] max-sm:w-3/5"
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
  sectionData: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  maxSteps: PropTypes.number.isRequired,
};
export default SubmitResponse;
