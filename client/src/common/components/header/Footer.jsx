// import AppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import SocialAccount from '../other/SocialAccount';
import ThemeSwitch from '../switch/ThemeSwitch';

const Footer = () => (
  <Paper
    sx={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 11,
      bgcolor: 'primary.main',
      borderRadius: 0,
    }}
    component="footer"
    elevation={3}
  >
    <Toolbar
      variant="dense"
      className="min-h-[var(--height-footer)] h-[var(--height-footer)]"
    >
      <Box className="max-w-6xl w-full mx-auto flex flex-row items-center justify-around">
        <ThemeSwitch />
        <Box sx={{ flexGrow: 1 }} />
        <SocialAccount />
      </Box>
    </Toolbar>
  </Paper>
);

export default Footer;
