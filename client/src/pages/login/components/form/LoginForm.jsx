import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Email,
  Password,
  Username,
  Organization,
  LoginFooter,
  LoginHeader,
  FormContext,
  Constants,
  LoginService,
} from './index';
import { getReDirectPath } from '../../../../auth/services/AuthService';

const LoginForm = () => {
  const navigate = useNavigate();
  const form = useContext(FormContext);
  const isSignupForm = form.name === Constants.SIGN_UP;

  const redirectTo = (user) => {
    if (!user) return;
    console.log(user);
    const redirectPath = getReDirectPath(user);
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
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const response = isSignupForm
        ? await LoginService.signup(data)
        : await LoginService.login(data);
      if (response) redirectTo(response);
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
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ mt: 1, mb: 1 }}
      >
        {form.name === Constants.SIGN_UP ? <Organization /> : null}
        {form.name === Constants.SIGN_UP ? <Username /> : null}
        <Email />
        <Password />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, p: 1 }}
        >
          <Typography noWrap variant="button">
            {form.name}
          </Typography>
        </Button>
        <LoginFooter />
      </Box>
    </Box>
  );
};

export default LoginForm;
