import { TextField } from '@mui/material';
import React from 'react';

const Email = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
  />
);

export default Email;
