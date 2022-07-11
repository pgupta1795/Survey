import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FilterNone from '@mui/icons-material/FilterNone';
import { v4 as uuidv4 } from 'uuid';
import { QuestionsContext } from '../../../../../hooks/contexts';

const CopyQuestion = ({ questionIndex }) => {
  const { questions, setQuestions, expandCloseAll } =
    useContext(QuestionsContext);

  const copyQuestion = () => {
    const qs = [...questions];
    expandCloseAll();
    const newOptions = qs[questionIndex].options.map((opn) => ({
      _id: uuidv4(),
      text: opn?.text,
      image: opn?.image || '',
    }));
    const newQuestion = {
      _id: uuidv4(),
      text: qs[questionIndex]?.text,
      image: qs[questionIndex]?.image || '',
      options: newOptions,
      open: true,
    };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  return (
    <IconButton
      aria-label="Copy"
      onClick={() => {
        copyQuestion();
      }}
    >
      <FilterNone color="primary" />
    </IconButton>
  );
};

CopyQuestion.propTypes = {
  questionIndex: PropTypes.number.isRequired,
};
export default CopyQuestion;
