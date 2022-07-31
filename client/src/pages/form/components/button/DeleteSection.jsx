import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { Button } from '@mui/material';
import React, { useContext } from 'react';
import toast from '../../../../app/toast';
import { Constants, QuestionsContext } from '../tab';

const DeleteSection = () => {
  const { section, setSections, handleBack } = useContext(QuestionsContext);

  const deleteSection = () => {
    handleBack();
    setSections((prev) => [...prev].filter((sec) => sec._id !== section._id));
    toast.warning(Constants.SECTION_DELETED);
  };

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
