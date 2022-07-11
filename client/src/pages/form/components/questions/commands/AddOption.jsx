import { Button } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';

const AddOption = ({ questionIndex }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const addOption = () => {
    const optionsOfQuestion = [...questions];
    optionsOfQuestion[questionIndex].options.push({
      text: `Option ${optionsOfQuestion[questionIndex].options.length + 1}`,
    });
    setQuestions(optionsOfQuestion);
  };
  return (
    <Button
      size="small"
      onClick={() => addOption()}
      sx={{
        textTransform: 'none',
      }}
    >
      Add Option
    </Button>
  );
};

AddOption.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default AddOption;
