import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

const TextButton = ({ children, ...rest }) => (
  <Button size="small" variant="text" color="inherit" {...rest}>
    {children}
  </Button>
);

TextButton.propTypes = {
  children: PropTypes.any.isRequired,
};
export default TextButton;
