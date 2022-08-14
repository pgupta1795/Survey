import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import useMobileStepper from '../../../../../../hooks/useMobileStepper';
import QuestionAnswerChart from '../../../../../report/components/chart/QuestionAnswerChart';

const SectionsResponses = ({ data }) => {
  const { activeStep, BasicStepper } = useMobileStepper(
    data?.formData?.sections,
    'text'
  );

  return (
    <Grid
      component={Paper}
      item
      sx={{
        width: '100%',
        p: 1,
      }}
    >
      {data?.formData?.sections ? (
        <>
          <Typography
            sx={{
              mb: 5,
              typography: { xs: 'body2', sm: 'body2', md: 'question' },
              color: 'primary.main',
            }}
          >
            Responses for the Section -
            <strong>{data.formData.sections[activeStep]?.name}</strong>
          </Typography>
          {data.formData.sections[activeStep]?.questions.map((ques) => (
            <QuestionAnswerChart
              key={ques._id}
              activeQuestion={ques}
              activeSection={data.formData.sections[activeStep]}
            />
          ))}
          {BasicStepper}
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

SectionsResponses.propTypes = {
  data: PropTypes.object.isRequired,
};
export default SectionsResponses;
