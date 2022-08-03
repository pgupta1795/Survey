import React, { lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Paper, useTheme } from '@mui/material';
import RespondingHeaderSection from '../header/responding/RespondingHeaderSection';
import '../../styles/Form.css';
import AllQuestions from '../questions/responding/AllQuestions';
import CenteredGridBox from '../../../../common/components/card/CenteredGridBox';
import BasicUserForm from '../../../../common/components/form/BasicUserForm';
import useFormById from '../../../../hooks/useFormById';

const lightFormBG = lazy(() =>
  import('../../../../assets/svgs/lightFormBG.svg')
);
const darkFormBG = lazy(() => import('../../../../assets/svgs/darkFormBG.svg'));

const UserResponseForm = () => {
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
          <Paper
            sx={{
              width: '100%',
              backgroundImage: `url(${
                theme.palette.mode === 'dark' ? darkFormBG : lightFormBG
              })`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <RespondingHeaderSection
              sx={{
                mb: 4,
                px: 2,
              }}
              name={formData?.name}
              description={formData?.description}
            />
          </Paper>
        </Box>
        <Box sx={{ mb: 10 }} />
        <AllQuestions />
      </CenteredGridBox>
    </BasicUserForm>
  );
};

export default UserResponseForm;
