import { TextField } from '@mui/material';
import React from 'react';

const MultilineTextField = ({ ...props }) => (
  <TextField fullWidth multiline variant="filled" {...props} />
);

export default MultilineTextField;
