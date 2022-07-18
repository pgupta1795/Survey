import { Button } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';

const AddOption = ({ questionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const addOption = () => {
    const optionsOfQuestion = [...section.questions];
    optionsOfQuestion[questionIndex].options.push({
      text: `Option ${optionsOfQuestion[questionIndex].options.length + 1}`,
    });
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = optionsOfQuestion;
        return sec;
      })
    );
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
