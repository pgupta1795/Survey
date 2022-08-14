import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const StepperButton = ({ label, ...rest }) => {
  const theme = useTheme();
  const back =
    theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />;
  const next =
    theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />;
  const startIcon = label !== 'Next' ? back : null;
  const endIcon = label !== 'Next' ? null : next;

  return (
    <Button size="small" {...rest} startIcon={startIcon} endIcon={endIcon}>
      {label}
    </Button>
  );
};

StepperButton.propTypes = {
  label: PropTypes.string.isRequired,
};
export default StepperButton;
