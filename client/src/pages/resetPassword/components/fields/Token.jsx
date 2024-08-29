import React from 'react';
import TextField from '../../../../common/styles/TextField';

const Token = () => (
  <TextField
    margin="normal"
    required
    fullWidth
    id="token"
    label="Token"
    name="token"
    inputProps={{
      style: {
        height: '3rem',
      },
    }}
  />
);

export default Token;
