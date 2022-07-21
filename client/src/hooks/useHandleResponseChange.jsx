import { useContext, useEffect, useState } from 'react';
import FieldTypes from '../helper/FieldTypes';
import {
  getInitialData,
  getNewSectiondata,
  saveResponse,
} from '../pages/form/utils/ResponseUtils';
import { UserRespondingContext } from './contexts';

const useHandleResponseChange = (question, type) => {
  const [values, setValues] = useState([]);
  const { section, formData, sectionData, setSectionData, pendingRes } =
    useContext(UserRespondingContext);

  const setPendingResponse = () => {
    const id = section._id;
    if (!pendingRes || !pendingRes?.sections) return;
    const allOptionIds = question.options.map(({ _id: optId }) => optId);
    pendingRes?.sections?.forEach((sec) => {
      if (sec._id !== id) return;
      const data = getInitialData(sec, id, question);
      const valuesToSet = data?.options?.map(({ optionId, optionText }) => {
        if (!allOptionIds.includes(optionId)) return null;
        return optionText;
      });
      const newVals = valuesToSet?.length > 0 ? [...valuesToSet] : [];
      setValues([...newVals]);
    });
    setSectionData([...pendingRes.sections]);
  };

  useEffect(() => {
    setPendingResponse();
    return () => {
      setValues([]);
      setSectionData([]);
    };
  }, [pendingRes]);

  const getOptionId = (j, i) => {
    const questions = section?.questions;
    let optionId = questions[i]?.options?.find((opt) => opt.text === j)?._id;
    if (FieldTypes.TEXT_FIELD === type) optionId = questions[i]?.options[0]._id;
    return optionId;
  };

  const handleChange = (optionText, qIndex, isChecked = true) => {
    const questions = section?.questions;
    const questionId = questions[qIndex]?._id;
    const optionId = getOptionId(optionText, qIndex);
    if (!optionId || optionId === '') return;
    setValues((prev) => {
      let newOptions = [optionText];
      if (FieldTypes.CHECKBOX === type) {
        if (!isChecked) {
          newOptions = prev.filter((item) => item !== optionText);
        } else {
          newOptions = [...prev, optionText];
        }
      }
      return [...newOptions];
    });
    // if (!isChecked) {
    //   optionText = '';
    //   optionId = '';
    // }
    const data = {
      questionId,
      options: [{ optionId, optionText }],
    };
    const newSectionData = getNewSectiondata(
      sectionData,
      section._id,
      data,
      type,
      isChecked
    );
    setSectionData(newSectionData);
    saveResponse(formData, newSectionData);
    console.log('SAVED RESPONSE');
  };

  return { values, handleChange };
};

export default useHandleResponseChange;
