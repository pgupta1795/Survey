import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

const QuestionImageView = ({ question }) => {
  const imgView = (
    <Container
      component="img"
      src={question.image}
      sx={{
        height: '100%',
        overflow: 'hidden',
        width: '100%',
      }}
    />
  );

  return question?.image !== '' ? imgView : '';
};

QuestionImageView.propTypes = {
  question: PropTypes.object.isRequired,
};
export default QuestionImageView;
