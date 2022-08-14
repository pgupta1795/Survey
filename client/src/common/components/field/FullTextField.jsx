import { useTheme } from '@mui/material';
import TextField from '@mui/material/TextField';
import React from 'react';

const FullTextField = (props) => (
  <TextField
    inputProps={{
      style: { ...useTheme().typography.answer },
    }}
    fullWidth
    placeholder="Add Text"
    {...props}
  />
);

export default FullTextField;
