import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CenteredGridBox,
  BasicUserForm,
  useFormById,
  HeaderSection,
  ThanksPage,
  AllQuestions,
} from './index';
import { UserRespondingContext } from '../../../../hooks/contexts';
import '../../styles/Form.css';

const UserResponseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseData, setResponseData] = useState([]);
  const { formId } = useParams();
  const formData = useFormById(formId);

  return (
    <BasicUserForm
      sx={{
        mt: 5,
      }}
    >
      <UserRespondingContext.Provider
        value={{ formData, responseData, setResponseData, setIsSubmitted }}
      >
        <CenteredGridBox key={formId}>
          <HeaderSection />
          {!isSubmitted ? <AllQuestions /> : <ThanksPage />}
        </CenteredGridBox>
      </UserRespondingContext.Provider>
    </BasicUserForm>
  );
};

export default UserResponseForm;
