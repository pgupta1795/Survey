import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ReportContainer from '../card/ReportContainer';
import MaturityChart from '../chart/MaturityChart';
import ScoresChart from '../chart/ScoresChart';
import ReportFooter from '../footer/ReportFooter';
import ReportCard from '../header/ReportCard';
import ReportTitle from '../header/ReportTitle';

const ReportView = ({ display }) => (
  <ReportContainer display={display}>
    <ReportTitle
      display={display}
      sx={{
        display: 'grid',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gridTemplateColumns: '10fr 1fr',
      }}
    />
    <Grid item xs={12} sx={{ display: 'flex' }}>
      <ReportCard
        display={display}
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          textAlign: 'center',
        }}
      />
    </Grid>
    <Grid item container xs={12}>
      <Grid item xs={6}>
        <MaturityChart />
      </Grid>
      <Grid item xs={6}>
        <ScoresChart />
      </Grid>
    </Grid>
    <Grid item xs={12} sx={{ display: 'flex' }}>
      <ReportFooter sx={{ px: 1 }} display={display} />
    </Grid>
  </ReportContainer>
);

ReportView.propTypes = {
  display: PropTypes.string.isRequired,
};

export default ReportView;
