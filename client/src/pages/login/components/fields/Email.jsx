import { TextField } from '@mui/material';
import React from 'react';

const Email = ({ ...props }) => (
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
    {...props}
  />
);

export default Email;
