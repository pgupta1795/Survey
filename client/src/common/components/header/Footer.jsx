import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import Logo from '../other/Logo';
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
      <Logo className="logo_brand" />
      <Box sx={{ flexGrow: 1 }} />
      <SocialAccount />
    </Toolbar>
  </AppBar>
);

export default Footer;
