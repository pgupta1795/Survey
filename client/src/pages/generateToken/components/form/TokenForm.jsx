import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginFooter,
  LoginHeader,
  FormContext,
  SubmitButton,
  Email,
  TokenService,
  RoutePaths,
} from './index';

const TokenForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useContext(FormContext);

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const response = await TokenService.sendToken(data);
      if (!response?.data) {
        console.log('Token Generation failed');
        return;
      }
      console.log('Token Generated');
      navigate(RoutePaths.RESET_PASSWORD);
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

export default TokenForm;
