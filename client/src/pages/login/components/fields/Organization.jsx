import React from 'react';
import TextField from '../../../../common/styles/TextField';

const Organization = ({ ...props }) => (
  <TextField
    margin="dense"
    required
    fullWidth
    id="organization"
    label="Organization"
    name="organization"
    inputProps={{ style: { height: '3rem' } }}
    {...props}
  />
);

export default Organization;
