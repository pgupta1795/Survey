import Close from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const RemoveImage = ({ questionIndex, optionIndex }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const updateImageLink = (i, j) => {
    const optionsOfQuestion = [...questions];

    if (j == null) {
      optionsOfQuestion[i].image = '';
    } else {
      optionsOfQuestion[i].options[j].image = '';
    }
    setQuestions(optionsOfQuestion);
  };

  return (
    <IconButton
      sx={{
        marginLeft: '-15px',
        marginTop: '-15px',
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
