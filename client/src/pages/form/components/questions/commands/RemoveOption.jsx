import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const RemoveOption = ({ questionIndex, optionIndex }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const removeOption = (i, j) => {
    const optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion);
      console.log(`${i}__${j}`);
    }
  };

  return (
    <IconButton
      aria-label="delete"
      onClick={() => {
        removeOption(questionIndex, optionIndex);
      }}
    >
      <Close color="primary" />
    </IconButton>
  );
};

RemoveOption.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  optionIndex: PropTypes.number.isRequired,
};
export default RemoveOption;
