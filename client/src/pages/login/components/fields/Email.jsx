import React from 'react';
import TextField from '../../../../common/styles/TextField';

const Email = ({ ...props }) => (
  <TextField
    margin="dense"
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    inputProps={{ style: { height: '3rem', color: 'black' } }}
    {...props}
  />
);

export default Email;
