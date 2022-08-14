import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const SubmitButton = ({ children, ...rest }) => (
  <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2, p: 1 }}
    {...rest}
  >
    {children}
  </Button>
);

SubmitButton.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SubmitButton;
