import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ResponseService from '../../services/ResponseService';
import { useFormById } from '../tab';

const ViewFormCommand = () => {
  const { formId } = useParams();
  const form = useFormById(formId);
  const url = ResponseService.getViewFormUrl(formId, form?.type);

  return (
    <Link to={url} target="_blank" rel="noopener noreferrer">
      <IconButton aria-label="view" title="Preview">
        <Visibility color="primary" />
      </IconButton>
    </Link>
  );
};

export default ViewFormCommand;
