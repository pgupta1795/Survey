import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Settings from '../../../../Settings.json';
import ReportLogo from './ReportLogo';

const ReportTitle = ({ display, ...props }) => {
  const size = display === 'none' ? 'h3' : 'h4';
  return (
    <Grid item xs={12} {...props}>
      <Typography
        sx={{
          typography: { xs: `${size}`, sm: `${size}`, md: `${size}` },
          color: 'white',
          p: 1,
        }}
      >
        <strong>{Settings.TITLE}</strong>
      </Typography>
      <ReportLogo />
    </Grid>
  );
};

ReportTitle.propTypes = {
  display: PropTypes.string.isRequired,
};
export default ReportTitle;
