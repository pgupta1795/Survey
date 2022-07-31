import { IconButton } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { QuestionsContext } from '../../../../../hooks/contexts';

const PreviewQuestions = ({ questionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const showAsQuestion = () => {
    const qs = [...section.questions];
    qs[questionIndex].open = false;
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = qs;
        return sec;
      })
    );
  };

  return (
    <IconButton
      disableRipple
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
