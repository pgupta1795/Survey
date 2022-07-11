import PropTypes from 'prop-types';
import React from 'react';
import EditableRadioOptionsView from './types/EditableRadioOptionsView';

const EditableAllOptionsView = ({ question, questionIndex }) => {
  console.log('');
  return (
    <EditableRadioOptionsView
      question={question}
      questionIndex={questionIndex}
    />
  );
};

EditableAllOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default EditableAllOptionsView;
