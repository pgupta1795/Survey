import { Link, Typography } from '@mui/material';
import React from 'react';
import Brand from '../../../../helper/Brand';
import Constants from '../../../../helper/Constants';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {Constants.COPYRIGHT}
    <Link color="inherit" href={Brand.URL}>
      {Brand.NAME}
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);

export default Copyright;
