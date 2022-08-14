import { useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
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
