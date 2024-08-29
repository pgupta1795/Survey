import PropTypes from 'prop-types';
import React from 'react';
import TextField from '../../../../common/styles/TextField';

const Password = ({ label, ...props }) => (
  <TextField
    margin="dense"
    required
    fullWidth
    name="password"
    label={label}
    type="password"
    id="password"
    autoComplete="current-password"
    inputProps={{ style: { height: '3rem' } }}
    {...props}
  />
);

Password.defaultProps = {
  label: 'Password',
};

Password.propTypes = {
  label: PropTypes.string,
};

export default Password;
