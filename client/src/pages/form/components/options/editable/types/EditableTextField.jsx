import { TextField } from '@mui/material';
import React from 'react';

const EditableTextField = ({ ...props }) => (
  <TextField fullWidth multiline variant="filled" {...props} />
);

export default EditableTextField;
