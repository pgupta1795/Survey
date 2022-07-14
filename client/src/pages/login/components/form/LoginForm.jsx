import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import {
  Email,
  Password,
  LoginFooter,
  LoginHeader,
  FormContext,
  LoginService,
  SubmitButton,
} from './index';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useContext(FormContext);

  const redirectTo = async (user) => {
    if (!user) return;
    console.log(user);
    const redirectPath = await getReDirectPath();
    if (redirectPath) {
      console.log('USER LOGGED IN ');
      navigate(redirectPath);
      return;
    }
    console.error('USER LOGGED FAILED');
    alert('USER LOGGED FAILED');
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const response = await LoginService.login(data);
      if (response) redirectTo(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        my: 6,
        mx: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LoginHeader />
      {loading ? (
        <CircularProgress color="primary" sx={{ mt: 10 }} />
      ) : (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1, mb: 1 }}
        >
          <Email />
          <Password />
          <SubmitButton>
            <Typography noWrap variant="button">
              {form.name}
            </Typography>
          </SubmitButton>
          <LoginFooter />
        </Box>
      )}
    </Box>
  );
};

export default LoginForm;
