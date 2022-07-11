import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { getCurrentUser } from '../../../../auth/services/AuthService';
import { UserRespondingContext } from '../../../../hooks/contexts';
import ResponseService from '../../services/ResponseService';

const SubmitResponse = () => {
  const userId = getCurrentUser()?.id;
  const { formData, responseData, setIsSubmitted } = useContext(
    UserRespondingContext
  );

  const submitResponse = async () => {
    const submissionData = {
      formId: formData._id,
      userId,
      response: responseData,
    };
    console.log(submissionData);

    const data = await ResponseService.submitResponse(submissionData);
    setIsSubmitted(true);
    console.log(data);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      onClick={submitResponse}
      sx={{ mt: 2 }}
    >
      Submit
    </Button>
  );
};
export default SubmitResponse;
