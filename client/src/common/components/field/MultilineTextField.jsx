import { TextField, useTheme } from '@mui/material';
import React from 'react';

const MultilineTextField = ({ ...props }) => (
  <TextField
    fullWidth
    multiline
    variant="filled"
    {...props}
    inputProps={{
      style: { ...useTheme().typography.answer },
    }}
  />
);

export default MultilineTextField;
