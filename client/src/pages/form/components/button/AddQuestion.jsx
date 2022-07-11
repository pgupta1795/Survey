import AddCircle from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Constants, QuestionsContext } from '../tab';

const AddQuestion = () => {
  const { setQuestions } = useContext(QuestionsContext);

  const addMoreQuestionField = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        _id: uuidv4(),
        ...Constants.DEFAULT_QUESTION,
        options: [
          { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
          { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
        ],
      },
    ]);
  };

  return (
    <Button
      variant="contained"
      onClick={addMoreQuestionField}
      endIcon={<AddCircle />}
      sx={{ m: '5px' }}
    >
      Add Question
    </Button>
  );
};

export default AddQuestion;
