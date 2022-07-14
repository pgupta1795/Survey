import { TextField } from '@mui/material';
import React from 'react';

const Token = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="token"
    label="Token"
    name="token"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
  />
);

export default Token;
