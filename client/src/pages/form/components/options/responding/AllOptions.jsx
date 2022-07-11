import React from 'react';
import PropTypes from 'prop-types';
import RadioOptions from './types/RadioOptions';

const AllOptions = ({ question, questionIndex }) => {
  console.log('');
  //   const { formData } = useContext(UserRespondingContext);
  return <RadioOptions question={question} questionIndex={questionIndex} />;
};

AllOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default AllOptions;
