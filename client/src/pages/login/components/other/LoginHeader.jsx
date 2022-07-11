import { Avatar, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormContext } from '../../../../hooks/contexts';

const LoginHeader = () => {
  const form = useContext(FormContext);
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {form?.name}
      </Typography>
    </Stack>
  );
};

export default LoginHeader;
