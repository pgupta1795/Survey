import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { QuestionsContext } from '../tab';

const DeleteSection = () => {
  const { section, setSections } = useContext(QuestionsContext);

  const deleteSection = () =>
    setSections((prev) => [...prev].filter((sec) => sec._id !== section._id));

  return (
    <Button
      variant="contained"
      onClick={deleteSection}
      endIcon={<DeleteOutline />}
    >
      Delete Section
    </Button>
  );
};

export default DeleteSection;
