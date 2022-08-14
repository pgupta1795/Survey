import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../auth/services/AuthService';
import RoutePaths from '../../../helper/RoutePaths';
import UserService from '../../../pages/login/services/UserService';

const ProfileMenu = ({ anchorEl, setAnchorEl }) => {
  const openAchor = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClose = () => setAnchorEl(null);
  const user = getCurrentUser();

  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={openAchor}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem
        onClick={() => {
          navigate(UserService.getUserUrl());
        }}
      >
        <Avatar sx={{ bgcolor: 'primary.main', width: 16, height: 16 }} />
        {user?.name}
      </MenuItem>
      {user?.admin ? <Divider /> : null}
      <MenuItem
        onClick={() => {
          UserService.logout();
          navigate(RoutePaths.LOGIN);
        }}
      >
        <ListItemIcon>
          <Logout fontSize="small" color="primary" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

ProfileMenu.defaultProps = {
  anchorEl: () => null,
};

ProfileMenu.propTypes = {
  anchorEl: PropTypes.any,
  setAnchorEl: PropTypes.func.isRequired,
};
export default ProfileMenu;
