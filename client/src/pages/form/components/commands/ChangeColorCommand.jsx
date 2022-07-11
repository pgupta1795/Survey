import React from 'react';
import { Palette } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const ChangeColorCommand = () => {
  const changeFormColor = () => {};

  return (
    <IconButton aria-label="change-theme" onClick={changeFormColor}>
      <Palette color="primary" />
    </IconButton>
  );
};

export default ChangeColorCommand;
