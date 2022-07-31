import { Grid, useTheme } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import GraphContainer from '../../../../common/components/card/GraphContainer';
import { ReportContext } from '../../../../hooks/contexts';
import MaturityChart from '../chart/MaturityChart';
import ScoresChart from '../chart/ScoresChart';

const ReportView = ({ formData, responseData }) => {
  const theme = useTheme();
  const { primary } = theme.palette;

  return (
    <ReportContext.Provider
      value={{
        formData,
        responseData,
      }}
    >
      <GraphContainer colors={[primary.main, primary.light]}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div>
              Lorem ipsum is typically a corrupted version of De finibus bonorum
              et malorum, a 1st-century BC text by the Roman statesman and
              philosopher Cicero, with words altered, added, and removed to make
              it nonsensical and improper Latin. Versions of the Lorem ipsum
              text have been used in typesetting at least since the 1960s, when
              it was popularized by advertisements for Letraset transfer
              sheets.[1] Lorem ipsum was introduced to the digital world in the
              mid-1980s, when Aldus employed it in graphic and word-processing
              templates for its desktop publishing program PageMaker. Other
              popular word processors, including Pages and Microsoft Word, have
              since adopted Lorem ipsum,[2] as have many LaTeX
              packages,[3][4][5] web content managers such as Joomla! and
              WordPress, and CSS libraries such as Semantic UI.[6]
            </div>
          </Grid>
          <Grid item xs={6}>
            <MaturityChart />
          </Grid>
          <Grid item xs={6}>
            <ScoresChart />
          </Grid>
          <Grid item xs={12}>
            TABLE
          </Grid>
        </Grid>
      </GraphContainer>
    </ReportContext.Provider>
  );
};

ReportView.propTypes = {
  formData: PropTypes.object.isRequired,
  responseData: PropTypes.array.isRequired,
};

export default ReportView;
