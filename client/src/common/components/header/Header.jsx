import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../auth/services/AuthService';
import Brand from '../../../helper/Brand';
import { RoutePaths } from '../../../router';
import Profile from '../profile/Profile';
import ThemeSwitch from '../switch/ThemeSwitch';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(getCurrentUser());
    return () => {
      setUser(null);
    };
  }, [navigate]);

  return (
    <AppBar position="fixed">
      <Toolbar
        variant="dense"
        className="min-h-[var(--height-header)] h-[var(--height-header)]"
      >
        <Box className="max-w-6xl w-full mx-auto flex flex-row items-center justify-around">
          <Link href={RoutePaths.LOGIN} variant="body2">
            <img
              src={Brand.LOGO}
              alt="Logo"
              className="max-sm:w-32 max-sm:h-32"
            />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          {user ? (
            <Box
              sx={{ display: { xs: 'flex', md: 'flex' } }}
              alignItems="center"
              justifyContent="space-around"
            >
              {!location.pathname.includes(
                RoutePaths.DASHBAORD.split('/')[1]
              ) ? (
                <ThemeSwitch />
              ) : null}
              <Profile />
            </Box>
          ) : (
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
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
