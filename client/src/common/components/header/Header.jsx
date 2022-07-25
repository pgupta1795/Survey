import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from '../../../helper/Brand';
import ThemeSwitch from '../switch/ThemeSwitch';
import logo from '../../../assets/images/logo/T.png';
import Profile from '../profile/Profile';
import { getCurrentUser } from '../../../auth/services/AuthService';

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
        <Link href={Brand.URL} variant="body2">
          <img src={logo} alt="Logo" className="logo_brand_small" />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          noWrap
          // variant="h4"
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
          {user ? <Profile /> : null}
          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
