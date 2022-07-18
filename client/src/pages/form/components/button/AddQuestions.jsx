import AddCircle from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { Constants, QuestionsContext } from '../tab';

const AddQuestions = () => {
  const { section, setSections } = useContext(QuestionsContext);

  const addQuestion = () => {
    const question = {
      _id: uuidv4(),
      ...Constants.DEFAULT_QUESTION,
      options: [
        { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
        { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
      ],
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
    <IconButton
      aria-label="Add"
      title="Add Question"
      onClick={() => addQuestion()}
    >
      <AddCircle color="primary" />
    </IconButton>
  );
};

export default AddQuestions;
