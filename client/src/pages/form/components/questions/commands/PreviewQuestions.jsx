import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { QuestionsContext } from '../../../../../hooks/contexts';

const PreviewQuestions = ({ questionIndex }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const showAsQuestion = () => {
    const qs = [...questions];
    qs[questionIndex].open = false;
    setQuestions(qs);
  };

  return (
    <IconButton
      aria-label="View"
      onClick={() => {
        showAsQuestion();
      }}
    >
      <VisibilityIcon color="primary" />
    </IconButton>
  );
};

PreviewQuestions.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default PreviewQuestions;
