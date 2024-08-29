import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getYear } from '../../../../../../features/userResponse';
import {
  getCurrentOrganization,
  getError,
  getStatus,
  getUserId,
} from '../../../../../../features/users';
import useCreatePDF from '../../../../../../hooks/useCreatePDF';
import ReportService from '../../../../../report/services/ReportService';
import DownloadReport from '../../../button/DownloadReport';
import PreviewReport from '../../../button/PreviewReport';
import SectionsResponses from './SectionsResponses';
import YearFilter from './YearFilter';

const OrganizationView = () => {
  const { formId } = useParams();
  const organization = useSelector(getCurrentOrganization);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const userId = useSelector(getUserId);
  const year = useSelector(getYear);
  const { savePDF, Report } = useCreatePDF(false, userId);

  if (status === 'loading') return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  return (
    <Grid container sx={{ mt: 2, gap: 3, width: 'min(100%, 85vw)' }}>
      <YearFilter />
      <Grid
        component={Paper}
        item
        sx={{ width: '100%', p: 1, textAlign: 'center' }}
      >
        <List sx={{ wordBreak: 'break-word' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Users" sx={{ bgcolor: 'primary.main' }} />
            </ListItemAvatar>
            <Grid container direction="column" spacing="2" component="p">
              <Typography
                component="span"
                sx={{
                  typography: {
                    xs: 'smallQuestion',
                    sm: 'smallQuestion',
                    md: 'question',
                  },
                  color: 'primary.main',
                }}
              >
                Who has Responded ?
              </Typography>
              {organization
                ? Object.values(organization)[0].map(({ email }) => (
                    <Typography component="span" key={email} variant="body2">
                      <strong>•</strong> {email}
                    </Typography>
                  ))
                : null}
            </Grid>
          </ListItem>
        </List>
      </Grid>
      <SectionsResponses />
      <Grid item sx={{ width: '100%', p: 1, textAlign: 'center' }}>
        <Grid container direction="column" spacing="5" justifyContent="center">
          <Typography variant="question">
            <strong>{`PLM Maturity Report for ${
              organization ? Object.keys(organization)[0] : null
            }`}</strong>
          </Typography>
          <PreviewReport
            url={`${ReportService.getUrlByUser(
              formId,
              userId
            )}?year=${year}&organization=${
              organization ? Object.keys(organization)[0] : null
            }`}
            variant="text"
          />
          <DownloadReport savePDF={savePDF} variant="text" />
          {Report}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OrganizationView;
