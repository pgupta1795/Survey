import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const RemoveOption = ({ questionIndex, optionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const removeOption = (i, j) => {
    const optionsOfQuestion = [...section.questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setSections((prev) =>
        [...prev].map((sec) => {
          if (sec._id !== section._id) return sec;
          sec.questions = optionsOfQuestion;
          return sec;
        })
      );
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
