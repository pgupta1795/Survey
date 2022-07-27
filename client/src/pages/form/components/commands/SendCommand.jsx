import React from 'react';
import { Send } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import SendModal from '../modal/SendModal';

const SendCommand = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <IconButton aria-label="send" onClick={() => setOpen(true)} title="Send">
        <Send color="primary" />
      </IconButton>
      <SendModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default SendCommand;
