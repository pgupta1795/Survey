import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RadioOptionsView from '../../noneditable/types/RadioOptionsView';
import { UserRespondingContext } from '../../../../../../hooks/contexts';

const RadioOptions = ({ question, questionIndex }) => {
  const [value, setValue] = useState('');
  const { formData, responseData, setResponseData } = useContext(
    UserRespondingContext
  );
  const questions = formData?.questions;

  const handleChange = (j, i) => {
    const questionId = questions[i]?._id;
    const optionId = questions[i]?.options?.find((opt) => opt.text === j)?._id;
    if (!optionId || optionId === '') return;
    const data = {
      questionId,
      optionId,
    };
    setValue(j);
    const newData = [...responseData];
    const responseIndex = newData.findIndex((x) => x.questionId === questionId);
    if (responseIndex === -1) {
      setResponseData((previous) => [...previous, data]);
      return;
    }
    newData[responseIndex].questionId = questionId;
    setResponseData(newData);
  };

  return (
    <RadioOptionsView
      question={question}
      value={value}
      onChange={(e) => handleChange(e.target.value, questionIndex)}
    />
  );
};

RadioOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default RadioOptions;
