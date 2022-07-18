import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';
import {
  CenteredGridBox,
  BasicUserForm,
  ThanksPage,
  AllQuestions,
  useFormById,
} from './index';
import '../../styles/Form.css';
import RespondingHeaderSection from '../header/responding/RespondingHeaderSection';

const UserResponseForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formId } = useParams();
  const formData = useFormById(formId);
  const theme = useTheme();

  return (
    <BasicUserForm
      sx={{
        mt: 5,
      }}
    >
      <CenteredGridBox key={formId}>
        <RespondingHeaderSection
          sx={{
            mb: 4,
            mx: -2,
            background: `${theme.palette.primary.main}`,
            borderTop: `10px solid ${theme.palette.primary.main}`,
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
          }}
          name={formData?.name}
          description={formData?.description}
        />
        {!isSubmitted ? (
          <AllQuestions setIsSubmitted={setIsSubmitted} />
        ) : (
          <ThanksPage />
        )}
      </CenteredGridBox>
    </BasicUserForm>
  );
};

export default UserResponseForm;
