import { Grid } from '@mui/material';
import React from 'react';
import ReportCard from './ReportCard';
import ReportTitle from './ReportTitle';

const ReportHeader = ({ ...props }) => (
  <Grid sx={{ width: '100%' }}>
    <Grid container {...props}>
      <ReportTitle
        sx={{
          textAlign: 'center',
        }}
      />
      <ReportCard
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center',
        }}
      />
    </Grid>
  </Grid>
);

export default ReportHeader;
