import { Grid } from '@mui/material';
import React from 'react';
import Brand from '../../../../helper/Brand';
import logo from '../../../../assets/images/logo/TechniaAddnode_Logo_White.png';

const ReportLogo = ({ ...props }) => (
  <Grid item xs={12} {...props} className="report_logo_container">
    <Grid sx={{ flexGrow: 1 }} />
    <div className="report_logo">
      <a href={Brand.URL}>
        <img src={logo} alt="TECHNIA" width="200px" height="50px" />
      </a>
    </div>
  </Grid>
);

export default ReportLogo;
