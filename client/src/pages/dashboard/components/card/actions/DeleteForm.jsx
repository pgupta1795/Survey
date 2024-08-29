import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import toast from '../../../../../app/toast';
import { refresh } from '../../../../../auth/services/AuthService';
import TextButton from '../../../../../common/components/button/TextButton';
import FormService from '../../../../form/services/FormService';

const DeleteForm = ({ formId }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteForm = async () => {
    try {
      await FormService.deleteForm(formId);
      await refresh();
      window.location.reload(true);
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  const handleConfirm = async () => {
    setOpen(false);
    await deleteForm();
  };

  return (
    <>
      <TextButton title="Delete Form" onClick={handleClickOpen}>
        <Delete className="text-white" />
        <div>Delete</div>
      </TextButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteForm.propTypes = {
  formId: PropTypes.string.isRequired,
};

export default DeleteForm;
