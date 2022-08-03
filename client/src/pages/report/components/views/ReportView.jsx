import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import MaturityChart from '../chart/MaturityChart';
import ScoresChart from '../chart/ScoresChart';
import ReportHeader from '../header/ReportHeader';
import ReportFooter from '../footer/ReportFooter';
import ReportContainer from '../card/ReportContainer';

const ReportView = ({ display }) => (
  <ReportContainer display={display}>
    <Grid item xs={12} sx={{ display: 'flex' }}>
      <ReportHeader
        sx={{
          py: 1,
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
    <Grid item xs={12}>
      <ReportFooter />
    </Grid>
  </ReportContainer>
);

ReportView.propTypes = {
  display: PropTypes.string.isRequired,
};

export default ReportView;
