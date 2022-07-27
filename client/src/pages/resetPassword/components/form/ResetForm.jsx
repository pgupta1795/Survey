import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Password,
  LoginFooter,
  LoginHeader,
  FormContext,
  SubmitButton,
  Token,
  Constants,
} from './index';
import ResetService from '../../services/ResetService';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import toast from '../../../../app/toast';

const ResetForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useContext(FormContext);

  const redirectTo = async (user) => {
    if (!user) return;
    console.log(user);
    const redirectPath = await getReDirectPath();
    if (redirectPath) {
      console.log(Constants.RESETTED_PASSWORD);
      toast.info(Constants.RESETTED_PASSWORD);
      navigate(redirectPath);
      return;
    }
    console.error(Constants.LOGIN_NOT_OK);
    toast.error(Constants.LOGIN_NOT_OK);
  };

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const response = await ResetService.resetPassword(data);
      if (response) redirectTo(response);
      setLoading(false);
    } catch (error) {
      toast.error(error);
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
          <Token />
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

export default ResetForm;
