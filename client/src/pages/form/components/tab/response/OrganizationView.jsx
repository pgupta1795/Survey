import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  Paper,
  Skeleton,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PreviewReport from '../../button/PreviewReport';
import ReportService from '../../../../report/services/ReportService';
import DownloadReport from '../../button/DownloadReport';
import useCreatePDF from '../../../../../hooks/useCreatePDF';
import QuestionAnswerChart from '../../../../report/components/chart/QuestionAnswerChart';
import useMobileStepper from '../../../../../hooks/useMobileStepper';

const OrganizationView = ({ organization }) => {
  console.log({ organization });
  const { formId } = useParams();
  const company = Object.keys(organization)[0];
  const userId = Object.values(organization)[0][0]._id;
  const url = ReportService.getUrlByUser(formId, userId);
  const { savePDF, Report } = useCreatePDF(false, userId);

  const data = useSelector((state) => state?.response?.value);

  const { activeStep, BasicStepper } = useMobileStepper(
    data?.formData?.sections,
    'text'
  );

  return (
    <Grid
      container
      sx={{
        mt: 2,
        gap: 3,
        width: 'min(100%, 85vw)',
      }}
    >
      <Grid
        component={Paper}
        item
        sx={{
          width: '100%',
          p: 1,
          textAlign: 'center',
        }}
      >
        <List sx={{ wordBreak: 'break-word' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Users" />
            </ListItemAvatar>
            <Grid container direction="column" spacing="2" component="p">
              <Typography variant="question">Who has Responded ?</Typography>
              {Object.values(organization)[0].map(({ email }) => (
                <Typography key={email} variant="answers">
                  {email}
                </Typography>
              ))}
            </Grid>
          </ListItem>
        </List>
      </Grid>
      <Grid
        component={Paper}
        item
        sx={{
          width: '100%',
          p: 1,
        }}
      >
        {data?.formData?.sections ? (
          <>
            <Typography variant="question" sx={{ mb: 5 }}>
              Responses for the Section -
              <strong>{data.formData.sections[activeStep]?.name}</strong>
            </Typography>
            <br />
            <br />
            <br />
            {data.formData.sections[activeStep]?.questions.map((ques) => (
              <QuestionAnswerChart
                key={ques._id}
                activeQuestion={ques}
                activeSection={data.formData.sections[activeStep]}
              />
            ))}
            {BasicStepper}
          </>
        ) : (
          <>
            <Skeleton variant="rectangular" height={150} />
            <Skeleton variant="rectangular" height={150} />
          </>
        )}
      </Grid>
      <Grid
        item
        sx={{
          width: '100%',
          p: 1,
          textAlign: 'center',
        }}
      >
        <Grid container direction="column" spacing="5" justifyContent="center">
          <Typography variant="question">{`PLM Maturity Report for ${company}`}</Typography>
          <PreviewReport url={url} variant="text" />
          <DownloadReport savePDF={savePDF} variant="text" />
          {Report}
        </Grid>
      </Grid>
    </Grid>
  );
};

OrganizationView.propTypes = {
  organization: PropTypes.object.isRequired,
};
export default OrganizationView;
