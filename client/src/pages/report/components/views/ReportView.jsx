import { Grid, useTheme } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import GraphContainer from '../../../../common/components/card/GraphContainer';
import { ReportContext } from '../../../../hooks/contexts';
import MaturityChart from '../chart/MaturityChart';
import ScoresChart from '../chart/ScoresChart';
import ReportHeader from '../../header/ReportHeader';
import ReportFooter from '../../footer/ReportFooter';

const ReportView = ({ formData, responseData, display }) => {
  const theme = useTheme();
  const { primary } = theme.palette;

  return (
    <ReportContext.Provider
      value={{
        formData,
        responseData,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GraphContainer
            colors={[primary.main, primary.main]}
            id="report-header"
            style={{ display: `${display}` }}
          >
            <ReportHeader />
          </GraphContainer>
        </Grid>
        <Grid item xs={6}>
          <MaturityChart
            id="report-chart-1"
            style={{
              position: `${display === 'none' ? 'absolute' : 'inherit'}`,
              top: `${display === 'none' ? '-1000px' : 'inherit'}`,
              paddingTop: '40px',
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ScoresChart
            id="report-chart-2"
            style={{
              position: `${display === 'none' ? 'absolute' : 'inherit'}`,
              top: `${display === 'none' ? '-1000px' : 'inherit'}`,
              paddingTop: '40px',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <ReportFooter id="report-footer" style={{ display: `${display}` }} />
        </Grid>
      </Grid>
    </ReportContext.Provider>
  );
};

ReportView.propTypes = {
  formData: PropTypes.object.isRequired,
  responseData: PropTypes.array.isRequired,
  display: PropTypes.string.isRequired,
};

export default ReportView;
