import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';

const DeleteQuestion = ({ questionIndex }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const deleteQuestion = () => {
    const qs = [...questions];
    if (questions.length > 1) {
      qs.splice(questionIndex, 1);
    }
    setQuestions(qs);
  };

  return (
    <IconButton
      aria-label="delete"
      onClick={() => {
        deleteQuestion();
      }}
    >
      <DeleteOutline color="primary" />
    </IconButton>
  );
};

DeleteQuestion.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default DeleteQuestion;
