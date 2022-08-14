import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React from 'react';

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
