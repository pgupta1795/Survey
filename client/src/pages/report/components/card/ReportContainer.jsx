import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import Colors from '../../../../helper/Colors';

const ReportContainer = ({ children, display }) => {
  const theme = useTheme();
  const matches = useMediaQuery(
    theme.breakpoints.up('sm') && theme.breakpoints.down('md')
  );
  const area1 = '15%';
  let area2 = matches ? '41%' : '46%';
  if (display === 'none') area2 = '44%';

  return (
    <Grid
      container
      id="report"
      style={{
        position: `${display === 'none' ? 'absolute' : 'inherit'}`,
        top: `${display === 'none' ? '-2000px' : 'inherit'}`,
      }}
      sx={{
        mx: 1,
        width: `${display === 'none' ? '210mm' : 'min(100%, 85vw)'}`,
        height: `${display === 'none' ? '297mm' : 'auto'}`,
        display: 'flex',
        backgroundImage: `linear-gradient(to bottom, ${Colors.THEME_MAIN} 0%, ${Colors.THEME_MAIN} ${area1}, ${Colors.SECTION_CARD_BG} ${area1}, ${Colors.SECTION_CARD_BG} ${area2}, ${Colors.ALICE_BLUE} ${area2}, ${Colors.ALICE_BLUE} 100%)`,
      }}
    >
      {children}
    </Grid>
  );
};

ReportContainer.propTypes = {
  children: PropTypes.any.isRequired,
  display: PropTypes.string.isRequired,
};

export default ReportContainer;
