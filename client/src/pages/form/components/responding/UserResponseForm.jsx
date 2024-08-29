import Paper from '@mui/material/Paper';
import React from 'react';
import { useParams } from 'react-router-dom';
import CenteredGridBox from '../../../../common/components/card/CenteredGridBox';
import BasicUserForm from '../../../../common/components/form/BasicUserForm';
import useFormById from '../../../../hooks/useFormById';
import '../../styles/Form.css';
import AllQuestions from '../questions/responding/AllQuestions';

const UserResponseForm = () => {
  const { formId } = useParams();
  const formData = useFormById(formId);

  return (
    <BasicUserForm sx={{ mt: 5 }}>
      <CenteredGridBox key={formId}>
        <Paper
          sx={{
            width: '100%',
            backgroundColor: 'primary.main',
            borderRadius: 0,
            mt: 5,
          }}
        >
          <div className="w-full mx-auto text-center min-h-[2.88rem] text-white text-[1.38rem] py-[0.63rem]">
            {formData?.name}
          </div>
        </Paper>
        <AllQuestions />
      </CenteredGridBox>
    </BasicUserForm>
  );
};

export default UserResponseForm;
