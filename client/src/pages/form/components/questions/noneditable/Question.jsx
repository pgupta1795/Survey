import PropTypes from 'prop-types';
import React from 'react';
import QuestionImageView from './QuestionImageView';

const Question = ({ question, questionIndex }) => (
  <>
    <div className="mx-1 text-sm">
      {questionIndex + 1}. {question.text}{' '}
      <span className="text-red-700 font-bold text-2xl">*</span>
    </div>
    <QuestionImageView question={question} />
  </>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default Question;
