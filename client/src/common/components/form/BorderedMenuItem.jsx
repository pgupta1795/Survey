import { useTheme } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';

const BorderedMenuItem = ({ children, ...rest }) => {
  const theme = useTheme();

  return (
    <MenuItem
      {...rest}
      sx={{
        position: 'relative',
        '&:after': {
          position: 'absolute',
          borderBottom: `solid 2px ${theme.palette.divider}`,
          top: '100%',
          left: 0,
          content: '""',
          width: '100%',
          zIndex: '100',
        },
      }}
    >
      {children}
    </MenuItem>
  );
};

BorderedMenuItem.propTypes = {
  children: PropTypes.any.isRequired,
};
export default BorderedMenuItem;
