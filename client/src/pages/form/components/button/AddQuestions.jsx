import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { Constants, QuestionsContext } from '../tab';
import FieldTypes, { fieldIcons } from '../../../../helper/FieldTypes';
import useAddQuestionsDropDown from '../../../../hooks/useAddQuestionsDropDown';

const AddQuestions = () => {
  const { section, setSections } = useContext(QuestionsContext);
  const { value, dropDownView } = useAddQuestionsDropDown(
    FieldTypes,
    fieldIcons
  );
  const addQuestion = () => {
    const question = {
      _id: uuidv4(),
      ...Constants.DEFAULT_QUESTION,
      options: [{ _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 }],
      type: value,
    };
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = [...sec.questions, question];
        return sec;
      })
    );
  };

  return (
    <div className="flex-box-display">
      {dropDownView}
      <IconButton
        aria-label="Add"
        title="Add Question"
        onClick={() => addQuestion()}
      >
        <Add color="primary" />
      </IconButton>
    </div>
  );
};

export default AddQuestions;
