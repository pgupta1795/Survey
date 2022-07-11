import React from 'react';
import { StarBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const StarCommand = () => {
  const starForm = () => {};

  return (
    <IconButton aria-label="favourites" onClick={starForm}>
      <StarBorder color="primary" />
    </IconButton>
  );
};

export default StarCommand;
