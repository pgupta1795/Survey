import Grid from '@mui/material/Grid';
import React from 'react';
import { getOrganization } from '../../../../auth/services/AuthService';
import Constants from '../../../../helper/Constants';
import ReportLogo from './ReportLogo';

const ReportTitle = () => (
  <Grid item xs={12}>
    <div className="flex justify-center items-center w-full px-4 mt-12 bg-white text-black">
      <ReportLogo />
      <div className="h-auto flex-auto" />
      <div className="inline-block text-xl font-medium">
        <div>{Constants.TITLE}</div>
        <div className="text-blue font-extrabold mx-auto text-center">
          {new URL(window.location.href).searchParams.get('organization') ||
            getOrganization()}
        </div>
      </div>
    </div>
  </Grid>
);

export default ReportTitle;
