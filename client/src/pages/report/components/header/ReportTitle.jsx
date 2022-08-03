import { Grid, Typography } from '@mui/material';
import React from 'react';
import Settings from '../../../../Settings.json';

const ReportTitle = ({ ...props }) => (
  <Grid item xs={12} {...props}>
    <Typography sx={{ typography: { sm: 'h4', md: 'h2' }, color: 'white' }}>
      <strong>{Settings.TITLE}</strong>
    </Typography>
  </Grid>
);

export default ReportTitle;
