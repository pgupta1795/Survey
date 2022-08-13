import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const Password = ({ label }) => (
  <TextField
    margin="normal"
    required
    fullWidth
    name="password"
    label={label}
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

Password.defaultProps = {
  label: 'Password',
};

Password.propTypes = {
  label: PropTypes.string,
};

export default Password;
