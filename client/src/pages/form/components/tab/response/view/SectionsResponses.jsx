import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getError,
  getFormDataById,
  getStatus,
} from '../../../../../../features/forms';
import useMobileStepper from '../../../../../../hooks/useMobileStepper';
import QuestionAnswerChart from '../../../../../report/components/chart/QuestionAnswerChart';

const SectionsResponses = () => {
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const { formId } = useParams();
  const formData = useSelector((state) => getFormDataById(state, formId));
  const { activeStep, BasicStepper } = useMobileStepper(
    formData?.sections,
    'text'
  );

  if (status === 'loading') return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  return (
    <Grid component={Paper} item sx={{ width: '100%', p: 1 }}>
      {formData?.sections ? (
        <>
          <Typography
            sx={{
              mb: 5,
              typography: { xs: 'body2', sm: 'body2', md: 'question' },
              color: 'primary.main',
            }}
          >
            Responses for the Section -
            <strong>{formData?.sections[activeStep]?.name}</strong>
          </Typography>
          {formData.sections[activeStep]?.questions.map((ques) => (
            <QuestionAnswerChart
              key={ques._id}
              activeQuestion={ques}
              activeSection={formData?.sections[activeStep]}
            />
          ))}
          <div className="w-full mx-auto flex justify-center items-center">
            {BasicStepper}
          </div>
        </>
      ) : (
        <>
          <Skeleton variant="rectangular" height={150} />
          <Skeleton variant="rectangular" height={150} />
        </>
      )}
    </Grid>
  );
};

export default SectionsResponses;
