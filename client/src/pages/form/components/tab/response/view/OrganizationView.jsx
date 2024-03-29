import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useCreatePDF from '../../../../../../hooks/useCreatePDF';
import ReportService from '../../../../../report/services/ReportService';
import DownloadReport from '../../../button/DownloadReport';
import PreviewReport from '../../../button/PreviewReport';
import SectionsResponses from './SectionsResponses';

const OrganizationView = ({ organization }) => {
  const { formId } = useParams();
  const company = Object.keys(organization)[0];
  const userId = Object.values(organization)[0][0]._id;
  const url = ReportService.getUrlByUser(formId, userId);
  const { savePDF, Report } = useCreatePDF(false, userId);
  const data = useSelector((state) => state?.response?.value);

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
              {Object.values(organization)[0].map(({ email }) => (
                <Typography component="span" key={email} variant="body2">
                  <strong>•</strong> {email}
                </Typography>
              ))}
            </Grid>
          </ListItem>
        </List>
      </Grid>
      <SectionsResponses data={data} />
      <Grid
        item
        sx={{
          width: '100%',
          p: 1,
          textAlign: 'center',
        }}
      >
        <Grid container direction="column" spacing="5" justifyContent="center">
          <Typography variant="question">
            <strong>{`PLM Maturity Report for ${company}`}</strong>
          </Typography>
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
