import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../../../../helper/Colors';

const ReportContainer = ({ children, display }) => (
  <Grid
    container
    id="report"
    style={{
      position: `${display === 'none' ? 'absolute' : 'inherit'}`,
      top: `${display === 'none' ? '-2000px' : 'inherit'}`,
    }}
    sx={{
      mt: 2,
      mx: 1,
      width: `${display === 'none' ? '210mm' : 'min(100%, 85vw)'}`,
      height: `${display === 'none' ? '297mm' : 'auto'}`,
      display: 'flex',
      backgroundImage: `linear-gradient(to bottom, ${Colors.THEME_MAIN} 0%, ${Colors.THEME_MAIN} 17.5%, ${Colors.SECTION_CARD_BG} 17.5%, ${Colors.SECTION_CARD_BG} 50%, ${Colors.ALICE_BLUE} 50%, ${Colors.ALICE_BLUE} 100%)`,
    }}
  >
    {children}
  </Grid>
);

ReportContainer.propTypes = {
  children: PropTypes.any.isRequired,
  display: PropTypes.string.isRequired,
};

export default ReportContainer;
