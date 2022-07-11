import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Button, useTheme } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const StepperButton = ({ label, ...rest }) => {
  const theme = useTheme();
  const back =
    theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />;
  const next =
    theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />;
  const icon = label === 'Next' ? next : back;

  return (
    <Button size="small" {...rest}>
      {icon}
    </Button>
  );
};

StepperButton.propTypes = {
  label: PropTypes.string.isRequired,
};
export default StepperButton;
