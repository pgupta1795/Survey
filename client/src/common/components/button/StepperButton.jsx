import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const StepperButton = ({ label, ...rest }) => {
  const theme = useTheme();
  const back =
    theme.direction === 'rtl' ? (
      <KeyboardArrowRight sx={{ color: 'primary' }} />
    ) : (
      <KeyboardArrowLeft sx={{ color: 'primary' }} />
    );
  const next =
    theme.direction === 'rtl' ? (
      <KeyboardArrowLeft sx={{ color: 'primary' }} />
    ) : (
      <KeyboardArrowRight sx={{ color: 'primary' }} />
    );
  const startIcon = label !== 'Next' ? back : null;
  const endIcon = label !== 'Next' ? null : next;

  return (
    <Button
      size="small"
      {...rest}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ color: 'primary' }}
    >
      {label}
    </Button>
  );
};

StepperButton.propTypes = {
  label: PropTypes.string.isRequired,
};
export default StepperButton;
