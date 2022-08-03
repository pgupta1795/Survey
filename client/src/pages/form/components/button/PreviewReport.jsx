import Assessment from '@mui/icons-material/Assessment';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewReport = ({ url, ...props }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      title="View Report"
      onClick={() => navigate(url)}
      startIcon={<Assessment color="primary" />}
      {...props}
    >
      View Report
    </Button>
  );
};

PreviewReport.propTypes = {
  url: PropTypes.string.isRequired,
};
export default PreviewReport;
