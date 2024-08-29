import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { FormContext } from '../../../../hooks/contexts';

const LoginHeader = () => {
  const form = useContext(FormContext);
  return (
    <div className="flex flex-col gap-1 items-center">
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {form?.name}
      </Typography>
    </div>
  );
};

export default LoginHeader;
