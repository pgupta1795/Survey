import TextField from '@mui/material/TextField';
import React from 'react';

const Organization = ({ ...props }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="organization"
    label="Organization"
    name="organization"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
    {...props}
  />
);

export default Organization;
