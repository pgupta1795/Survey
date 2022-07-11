import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Brand from '../../../helper/Brand';
import ThemeSwitch from '../switch/ThemeSwitch';
import logo from '../../../assets/images/logo/T.png';
import Profile from '../profile/Profile';
import { getCurrentUser } from '../../../auth/services/AuthService';

const Header = () => {
  const user = getCurrentUser();

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Link href={Brand.URL} variant="body2">
          <img src={logo} alt="Logo" className="logo_brand_small" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          noWrap
          sx={{
            typography: { xs: 'body1', md: 'h5' },
          }}
        >
          {document.title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{ display: { xs: 'flex', md: 'flex' } }}
          alignItems="center"
          justifyContent="space-around"
        >
          {user?.name ? <Profile /> : null}
          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
