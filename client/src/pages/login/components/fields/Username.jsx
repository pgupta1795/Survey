import { TextField } from '@mui/material';
import React from 'react';

const Username = () => (
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
  />
);

export default Username;
