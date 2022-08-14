import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const TextButton = ({ children, ...rest }) => (
  <Button size="small" variant="text" color="inherit" {...rest}>
    {children}
  </Button>
);

TextButton.propTypes = {
  children: PropTypes.any.isRequired,
};
export default TextButton;
