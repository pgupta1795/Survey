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
    <ReportTitle display={display} />
    <ReportCard display={display} />
    <Grid
      item
      container
      xs={12}
      sx={{ px: '1rem', py: '2rem' }}
      className="bg-aliceblue"
    >
      <Grid item xs={6} className="text-black">
        <MaturityChart />
      </Grid>
      <Grid item xs={6} className="text-black">
        <ScoresChart />
      </Grid>
    </Grid>
    <Grid item xs={12} sx={{ display: 'flex' }}>
      <ReportFooter display={display} />
    </Grid>
  </ReportContainer>
);

ReportView.propTypes = {
  display: PropTypes.string.isRequired,
};

export default ReportView;
