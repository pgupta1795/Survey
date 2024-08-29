import { Paper, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCreatePDF from '../../hooks/useCreatePDF';
import useFormById from '../../hooks/useFormById';
import DownloadReport from '../form/components/button/DownloadReport';
import PreviewReport from '../form/components/button/PreviewReport';
import ResponseService from '../form/services/ResponseService';
import ReportService from '../report/services/ReportService';

const ThanksPage = () => {
  const { formId } = useParams();
  const url = ReportService.getUrl(formId);
  const { savePDF, Report } = useCreatePDF(true);
  const navigate = useNavigate();
  const form = useFormById(formId);
  const theme = useTheme();

  return (
    <>
      <div className="w-full min-h-[calc(100vh_-_var(--height-header))] flex flex-col justify-center items-center">
        <Paper
          elevation={3}
          className="relative w-full mx-auto max-sm:max-w-xs max-md:max-w-sm max-w-[41.75rem] flex flex-col flex-auto justify-center items-center gap-3 max-h-[15.75rem] border-t-[1.13rem] rounded-t-10xs border-blue border-solid overflow-hidden"
        >
          <span className="text-darkgray-200 text-xs">Form submitted</span>
          <span className="text-xl">Thank You for submiting!</span>
          <Button
            onClick={() => {
              const submitFormUrl = ResponseService.getViewFormUrl(
                formId,
                form?.type
              );
              navigate(submitFormUrl);
            }}
            sx={{ p: 0 }}
            className="hover:text-blue/60 focus:text-blue/60"
          >
            <span className="underline text-xs">Submit another response</span>
          </Button>
          {form?.type === 'PLM' ? (
            <div className="flex sm:flex-row flex-col gap-2">
              <PreviewReport
                url={url}
                sx={{
                  color: `${
                    theme.palette.mode === 'light' ? 'black' : 'white'
                  }`,
                  fontSize: '12px',
                  px: 6,
                }}
              />
              <DownloadReport
                savePDF={savePDF}
                sx={{
                  color: `${
                    theme.palette.mode === 'light' ? 'black' : 'white'
                  }`,
                  fontSize: '12px',
                  px: 6,
                }}
              />
            </div>
          ) : null}
          <div className="absolute bg-footer bg-repeat w-[65.19rem] h-[2.56rem] block bottom-0 -left-14" />
        </Paper>
      </div>
      {form?.type === 'PLM' ? Report : null}
    </>
  );
};

export default ThanksPage;
