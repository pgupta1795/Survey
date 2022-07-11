import { TextField } from '@mui/material';
import React from 'react';

const Password = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
  />
);

export default Password;
