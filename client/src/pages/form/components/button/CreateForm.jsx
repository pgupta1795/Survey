import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormService from '../../services/FormService';

const CreateForm = () => {
  const navigate = useNavigate();
  const addForm = async () => {
    const formData = await FormService.createForm();
    const id = formData._id;
    console.log(`Created Following Form with ID ${id}: ${formData}`);
    navigate(FormService.getFormUrl(id));
  };

  return (
    <IconButton
      onClick={addForm}
      color="inherit"
      sx={{
        transform: 'scale(2.5)',
      }}
    >
      <Add />
    </IconButton>
  );
};

export default CreateForm;
