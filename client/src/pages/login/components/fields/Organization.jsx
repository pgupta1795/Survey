import { TextField } from '@mui/material';
import React from 'react';

const Organization = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="organization"
    label="Organization"
    name="organization"
    // autoComplete="organization"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
  />
);

export default Organization;
