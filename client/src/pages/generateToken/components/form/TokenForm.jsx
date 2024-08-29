import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import useReCaptcha from '../../../../hooks/useReCaptcha';
import {
  Constants,
  Email,
  FormContext,
  LoginFooter,
  LoginHeader,
  RoutePaths,
  SubmitButton,
  TokenService,
} from './index';

const TokenForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useContext(FormContext);
  const { token, render, reRef } = useReCaptcha();

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      reRef.current.reset();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      data = { ...data, token };
      const response = await TokenService.sendToken(data);
      if (!response?.data) {
        toast.error(Constants.ERROR_GENERATE_TOKEN);
        console.error(Constants.ERROR_GENERATE_TOKEN);
        return;
      }
      toast.info(Constants.TOKEN_OK);
      navigate(RoutePaths.RESET_PASSWORD);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.error || error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4">
      <LoginHeader />
      {loading ? (
        <div className="inline-flex flex-col gap-0 justify-center items-center w-full mt-3">
          <CircularProgress color="primary" sx={{ mt: 10 }} />
        </div>
      ) : (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          className="inline-flex flex-col gap-0 justify-center items-center w-full"
        >
          <Email autoFocus />
          {render}
          <SubmitButton sx={{ mt: 1, mb: 0, p: 1 }}>
            <Typography noWrap variant="button">
              {form.name}
            </Typography>
          </SubmitButton>
          <LoginFooter />
        </Box>
      )}
    </div>
  );
};

export default TokenForm;
