import AddCircle from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Constants, QuestionsContext } from '../tab';

const Add = () => {
  const { setSections } = useContext(QuestionsContext);

  const add = () => {
    setSections((previous) => [
      ...previous,
      {
        _id: uuidv4(),
        ...Constants.DEFAULT_SECTION,
        questions: [
          {
            _id: uuidv4(),
            ...Constants.DEFAULT_QUESTION,
            options: [
              { _id: uuidv4(), ...Constants.DEFAULT_OPTION_1 },
              { _id: uuidv4(), ...Constants.DEFAULT_OPTION_2 },
            ],
          },
        ],
      },
    ]);
  };

  return (
    <Button variant="contained" onClick={add} endIcon={<AddCircle />}>
      Add Section
    </Button>
  );
};

export default Add;
