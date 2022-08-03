import Download from '@mui/icons-material/Download';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const DownloadReport = ({ savePDF, ...props }) => (
  <Button
    variant="outlined"
    title="Download Report"
    onClick={savePDF}
    startIcon={<Download color="primary" />}
    {...props}
  >
    Download Report
  </Button>
);

DownloadReport.propTypes = {
  savePDF: PropTypes.func.isRequired,
};
export default DownloadReport;
