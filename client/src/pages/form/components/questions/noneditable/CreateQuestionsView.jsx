import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import CreateAllOptions from '../../options/noneditable/CreateAllOptions';
import QuestionImageView from './QuestionImageView';

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
