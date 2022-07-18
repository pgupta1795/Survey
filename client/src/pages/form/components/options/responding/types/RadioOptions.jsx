import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RadioOptionsView from '../../noneditable/types/RadioOptionsView';
import { UserRespondingContext } from '../../../../../../hooks/contexts';
import {
  getInitialData,
  getNewSectiondata,
  saveResponse,
} from '../../../../utils/ResponseUtils';
import ResponseService from '../../../../services/ResponseService';

const RadioOptions = ({ question, questionIndex }) => {
  const [value, setValue] = useState('');
  const { section, formData, sectionData, setSectionData } = useContext(
    UserRespondingContext
  );

  const setPendingResponse = async () => {
    const id = section._id;
    const pRes = await ResponseService.getPendingResponse();
    pRes?.sections?.forEach((sec) => {
      const data = getInitialData(sec, id, question);
      question.options.forEach(({ _id: optId, text }) => {
        if (optId !== data.optionId) return;
        setValue(text);
      });
    });
    if (pRes?.sections) setSectionData((prev) => [...prev, ...pRes.sections]);
  };

  useEffect(() => {
    setPendingResponse();
    return () => {
      setValue('');
    };
  }, []);

  const handleChange = (j, i) => {
    const questions = section?.questions;
    const questionId = questions[i]?._id;
    const optionId = questions[i]?.options?.find((opt) => opt.text === j)?._id;
    if (!optionId || optionId === '') return;
    const data = {
      questionId,
      optionId,
    };
    setValue(j);
    const newSectionData = getNewSectiondata(sectionData, section._id, data);
    setSectionData(newSectionData);
    saveResponse(formData, newSectionData);
    console.log('SAVED RESPONSE');
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
