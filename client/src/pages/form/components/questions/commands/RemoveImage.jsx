import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const RemoveImage = ({ questionIndex, optionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const updateImageLink = (i, j) => {
    const optionsOfQuestion = [...section.questions];

    if (j == null) {
      optionsOfQuestion[i].image = '';
    } else {
      optionsOfQuestion[i].options[j].image = '';
    }
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = optionsOfQuestion;
        return sec;
      })
    );
  };

  return (
    <IconButton
      sx={{
        ml: '-15px',
        mt: '-15px',
        zIndex: 999,
        backgroundColor: '#d3d3d3',
      }}
      size="small"
      onClick={() => updateImageLink(questionIndex, optionIndex)}
    >
      <Close color="primary" />
    </IconButton>
  );
};

RemoveImage.defaultProps = {
  optionIndex: null,
};

RemoveImage.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  optionIndex: PropTypes.number,
};
export default RemoveImage;
