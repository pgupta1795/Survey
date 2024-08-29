import Edit from '@mui/icons-material/Edit';
import Visibility from '@mui/icons-material/Visibility';
import CardActions from '@mui/material/CardActions';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextButton from '../../../../../common/components/button/TextButton';
import useFormById from '../../../../../hooks/useFormById';
import FormService from '../../../../form/services/FormService';
import ResponseService from '../../../../form/services/ResponseService';
import DeleteForm from './DeleteForm';

const FormsCardActions = ({ formId }) => {
  const navigate = useNavigate();
  const form = useFormById(formId);

  return (
    <CardActions className="card-action">
      <TextButton
        title="View Form"
        onClick={() =>
          navigate(ResponseService.getViewFormUrl(formId, form?.type))
        }
      >
        <Visibility className="text-white" />
        <div>View</div>
      </TextButton>
      <TextButton
        title="Edit Form"
        onClick={() => navigate(FormService.getFormUrl(formId))}
      >
        <Edit className="text-white" />
        <div>Edit</div>
      </TextButton>
      <DeleteForm formId={formId} />
    </CardActions>
  );
};

FormsCardActions.propTypes = {
  formId: PropTypes.string.isRequired,
};
export default FormsCardActions;
