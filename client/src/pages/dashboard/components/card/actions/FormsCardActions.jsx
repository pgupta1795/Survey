import Delete from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../../app/toast';
import { refresh } from '../../../../../auth/services/AuthService';
import TextButton from '../../../../../common/components/button/TextButton';
import FormService from '../../../../form/services/FormService';
import ResponseService from '../../../../form/services/ResponseService';

const FormsCardActions = ({ formId }) => {
  const navigate = useNavigate();

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

  return (
    <CardActions className="card-action">
      <TextButton
        title="View Form"
        onClick={() => navigate(ResponseService.getViewFormUrl(formId))}
      >
        <Visibility />
      </TextButton>
      <TextButton
        title="Edit Form"
        onClick={() => navigate(FormService.getFormUrl(formId))}
      >
        <Edit />
      </TextButton>
      <TextButton title="Delete Form" onClick={deleteForm}>
        <Delete />
      </TextButton>
    </CardActions>
  );
};

FormsCardActions.propTypes = {
  formId: PropTypes.string.isRequired,
};
export default FormsCardActions;
