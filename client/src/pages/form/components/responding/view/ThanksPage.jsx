import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DownloadIcon from '@mui/icons-material/Download';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';
import ReportService from '../../../../report/services/ReportService';
import useCreatePDF from '../../../../../hooks/useCreatePDF';

const ThanksPage = () => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const url = ReportService.getUrl(formId);
  const { savePDF, Report } = useCreatePDF(true);

  return (
    <FlexStartBox>
      <Typography variant="body1">Form submitted</Typography>
      <Typography variant="body2">Thanks for submiting form</Typography>
      <Button onClick={() => window.location.reload(true)} sx={{ p: 0 }}>
        Submit another response
      </Button>
      <Button
        variant="outlined"
        title="View Report"
        onClick={() => navigate(url)}
        startIcon={<AssessmentIcon color="primary" />}
      >
        View Report
      </Button>
      <Button
        variant="outlined"
        title="Download Report"
        onClick={savePDF}
        startIcon={<DownloadIcon color="primary" />}
      >
        Download Report
      </Button>
      {Report}
    </FlexStartBox>
  );
};

export default ThanksPage;
