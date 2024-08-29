import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import ProfileMenu from './ProfileMenu';

const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
          <AccountCircleIcon fontSize="large" />
        </Button>
      </Tooltip>
      <ProfileMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default Profile;
