import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo/T.png';
import Profile from '../profile/Profile';
import { getCurrentUser } from '../../../auth/services/AuthService';
import { RoutePaths } from '../../../router';
import ThemeSwitch from '../switch/ThemeSwitch';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getCurrentUser());
    return () => {
      setUser(null);
    };
  }, [navigate]);

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Link href={RoutePaths.LOGIN} variant="body2">
          <img src={logo} alt="Logo" className="logo_brand_small" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          noWrap
          sx={{
            typography: { xs: 'caption', sm: 'h6', md: 'h4' },
            fontWeight: '600',
            letterSpacing: 1,
            wordSpacing: 1.5,
          }}
        >
          {document.title.toUpperCase()}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{ display: { xs: 'flex', md: 'flex' } }}
          alignItems="center"
          justifyContent="space-around"
        >
          <ThemeSwitch />
          {user ? <Profile /> : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
