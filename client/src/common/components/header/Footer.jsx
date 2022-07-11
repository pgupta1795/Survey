import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
// import ExperienceMatters from '../../../assets/images/logo/Experience_Matters.png';
import Brand from '../../../helper/Brand';
import SocialAccount from '../other/SocialAccount';

const Footer = () => (
  <AppBar
    position="fixed"
    sx={{
      top: 'auto',
      bottom: 0,
    }}
  >
    <Toolbar variant="dense">
      <div className="logo_brand">
        <a href={Brand.URL}>
          <img src={Brand.LOGO} alt="TECHNIA" />
        </a>
      </div>
      <Box sx={{ flexGrow: 1 }} />
      <SocialAccount />
    </Toolbar>
  </AppBar>
);

export default Footer;
