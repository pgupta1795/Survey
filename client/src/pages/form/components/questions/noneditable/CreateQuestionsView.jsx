import { Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import QuestionImageView from './QuestionImageView';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import CreateAllOptions from '../../options/noneditable/CreateAllOptions';

const CreateQuestionsView = ({ question, questionIndex }) => (
  <FlexStartBox>
    <Typography variant="subtitle1" sx={{ ml: '10px' }}>
      {questionIndex + 1}. {question?.text}
    </Typography>
    <QuestionImageView question={question} />
    <CreateAllOptions question={question} questionIndex={questionIndex} />
  </FlexStartBox>
);

CreateQuestionsView.defaultProps = {
  question: '',
};

CreateQuestionsView.propTypes = {
  question: PropTypes.object,
  questionIndex: PropTypes.number.isRequired,
};
export default React.memo(CreateQuestionsView);
