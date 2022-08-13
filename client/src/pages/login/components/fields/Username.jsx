import { TextField } from '@mui/material';
import React from 'react';

const Username = ({ ...props }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="name"
    label="Username"
    name="name"
    autoComplete="username"
    autoFocus
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
    {...props}
  />
);

export default Username;
