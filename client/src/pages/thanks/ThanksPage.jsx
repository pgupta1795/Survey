import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FlexStartBox from '../../common/components/card/FlexStartBox';
import BasicUserForm from '../../common/components/form/BasicUserForm';
import useCreatePDF from '../../hooks/useCreatePDF';
import DownloadReport from '../form/components/button/DownloadReport';
import PreviewReport from '../form/components/button/PreviewReport';
import ResponseService from '../form/services/ResponseService';
import ReportService from '../report/services/ReportService';

const ThanksPage = () => {
  const { formId } = useParams();
  const url = ReportService.getUrl(formId);
  const { savePDF, Report } = useCreatePDF(true);
  const navigate = useNavigate();
  const submitFormUrl = ResponseService.getViewFormUrl(formId);

  return (
    <BasicUserForm sx={{ mt: 5 }}>
      <FlexStartBox>
        <Typography variant="body1">Form submitted</Typography>
        <Typography variant="body2">Thanks for submiting form</Typography>
        <Button onClick={() => navigate(submitFormUrl)} sx={{ p: 0 }}>
          Submit another response
        </Button>
        <PreviewReport url={url} />
        <DownloadReport savePDF={savePDF} />
        {Report}
      </FlexStartBox>
    </BasicUserForm>
  );
};

export default ThanksPage;
