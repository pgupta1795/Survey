import Add from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { refresh } from '../../../../auth/services/AuthService';
import FormService from '../../services/FormService';

const CreateForm = () => {
  const navigate = useNavigate();
  const addForm = async () => {
    try {
      const formData = await FormService.createForm();
      if (!formData) return;
      const id = formData._id;
      console.log(`Form Created with ID ${id}: ${formData}`);
      toast.info(`Form Created with ID ${id}`);
      await refresh();
      navigate(FormService.getFormUrl(id));
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };

  return (
    <IconButton
      onClick={addForm}
      color="inherit"
      sx={{
        transform: 'scale(2.5)',
      }}
    >
      <Add color="primary" />
    </IconButton>
  );
};

export default CreateForm;
