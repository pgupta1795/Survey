import { Button, Tooltip, Avatar } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import React from 'react';
import { stringAvatar } from '../../utils/CommonUtils';
import ProfileMenu from './ProfileMenu';
import { getCurrentUser } from '../../../auth/services/AuthService';

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = getCurrentUser();

  const handleClick = (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    )
      return;
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Tooltip title="Person Details">
        <Button
          color="inherit"
          onClick={handleClick}
          size="small"
          edge="end"
          aria-label="account of current user"
          aria-controls=""
          aria-haspopup="true"
          sx={{ pointerEvents: 'auto', cursor: 'not-allowed' }}
        >
          <Avatar {...stringAvatar(user?.name)} />
          <ArrowRight style={{ pointerEvents: 'auto' }} />
        </Button>
      </Tooltip>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default Profile;
