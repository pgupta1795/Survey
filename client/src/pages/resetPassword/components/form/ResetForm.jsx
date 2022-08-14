import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import ResetService from '../../services/ResetService';
import {
  Constants,
  FormContext,
  LoginFooter,
  LoginHeader,
  Password,
  SubmitButton,
  Token,
} from './index';

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
          <Password label="New Password" />
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
