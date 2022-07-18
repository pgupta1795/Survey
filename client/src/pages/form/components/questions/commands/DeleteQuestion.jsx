import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';

const DeleteQuestion = ({ questionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const deleteQuestion = () =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions.splice(questionIndex, 1);
        return sec;
      })
    );

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
