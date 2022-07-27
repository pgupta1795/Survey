import { Grow } from '@mui/material';
import React, { forwardRef } from 'react';

const GrowTransition = forwardRef((props, ref) => (
  <Grow ref={ref} {...props} timeout={500} />
));

export default GrowTransition;
