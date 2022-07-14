import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

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
