import React from 'react';
import { Send } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const SendCommand = () => {
  const sendForm = () => {};

  return (
    <IconButton aria-label="search" onClick={sendForm} title="Send">
      <Send color="primary" />
    </IconButton>
  );
};

export default SendCommand;
