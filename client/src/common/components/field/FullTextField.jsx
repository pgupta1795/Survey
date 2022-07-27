import { useTheme } from '@emotion/react';
import { TextField } from '@mui/material';
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
