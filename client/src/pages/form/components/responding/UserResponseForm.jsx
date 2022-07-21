import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, useTheme } from '@mui/material';
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
        <Box
          sx={{
            borderTop: `10px solid ${theme.palette.primary.main}`,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          <Paper sx={{ width: '100%' }}>
            <RespondingHeaderSection
              sx={{
                mb: 4,
                px: 1,
              }}
              name={formData?.name}
              description={formData?.description}
            />
          </Paper>
        </Box>
        <Box sx={{ mb: 10 }} />
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
