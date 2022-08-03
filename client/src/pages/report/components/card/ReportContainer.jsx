import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../../../helper/Colors';
import ReportLogo from '../header/ReportLogo';

const ReportContainer = ({ children, display }) => (
  <Grid
    container
    spacing={display === 'none' ? 1 : 1}
    id="report"
    style={{
      position: `${display === 'none' ? 'absolute' : 'inherit'}`,
      top: `${display === 'none' ? '-2000px' : 'inherit'}`,
    }}
    sx={{
      mt: 2,
      mx: 1,
      width: 'min(100%, 85vw)',
      minHeight: '100vh',
      background: `linear-gradient(to bottom, ${Colors.THEME_MAIN} 0% , ${Colors.SECTION_CARD_BG} 30%, ${Colors.ALICE_BLUE} 100%)`,
    }}
  >
    <ReportLogo />
    {children}
  </Grid>
);

ReportContainer.propTypes = {
  children: PropTypes.any.isRequired,
  display: PropTypes.string.isRequired,
};

export default ReportContainer;
