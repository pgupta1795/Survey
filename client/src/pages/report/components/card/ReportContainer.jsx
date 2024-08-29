import { Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';

const ReportContainer = ({ children, display }) => (
  <Grid
    container
    component={Paper}
    elevation={3}
    id="report"
    style={{
      position: `${display === 'none' ? 'absolute' : 'relative'}`,
      top: `${display === 'none' ? '-2000px' : 'inherit'}`,
    }}
    sx={{
      mt: '2.19rem',
      width: `${display === 'none' ? '210mm' : 'min(100%, 41.75rem)'}`,
      height: `${display === 'none' ? '297mm' : 'auto'}`,
      display: 'flex',
      background: 'white',
    }}
    className="mx-auto self-center"
  >
    <div className="absolute top-[0rem] left-[0rem] rounded-t-10xs rounded-b-none bg-blue w-full h-[0.81rem]" />
    {children}
  </Grid>
);

ReportContainer.propTypes = {
  children: PropTypes.any.isRequired,
  display: PropTypes.string.isRequired,
};

export default ReportContainer;
