import { TextField } from '@mui/material';
import React from 'react';

const FullTextField = (props) => (
  <TextField fullWidth placeholder="Add Text" sx={{ mt: 1 }} {...props} />
);

export default FullTextField;
