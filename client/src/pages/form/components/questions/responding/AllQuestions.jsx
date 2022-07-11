import React, { useContext } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { UserRespondingContext } from '../../../../../hooks/contexts';
import QuestionImageView from '../noneditable/QuestionImageView';
import AllOptions from '../../options/responding/AllOptions';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import SubmitResponse from '../../button/SubmitResponse';

const AllQuestions = () => {
  const { formData } = useContext(UserRespondingContext);

  return (
    <Grid sx={{ width: '100%' }}>
      {formData?.questions.map((ques, i) => (
        <Paper key={`user-res-${ques._id}`} sx={{ mt: 2, width: '100%' }}>
          <FlexStartBox>
            <Typography variant="subtitle1" sx={{ ml: '10px' }}>
              {i + 1}. {ques.text}
            </Typography>
            <QuestionImageView question={ques} />
            <AllOptions question={ques} questionIndex={i} />
          </FlexStartBox>
        </Paper>
      ))}
      <SubmitResponse />
    </Grid>
  );
};

export default AllQuestions;
