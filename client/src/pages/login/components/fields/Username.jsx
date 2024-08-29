import React from 'react';
import TextField from '../../../../common/styles/TextField';

const Username = ({ ...props }) => (
  <TextField
    margin="dense"
    required
    fullWidth
    id="name"
    label="Username"
    name="name"
    autoComplete="username"
    inputProps={{ style: { height: '3rem' } }}
    {...props}
  />
);

export default Username;
