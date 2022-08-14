import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
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

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      let data = new FormData(event.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const response = await TokenService.sendToken(data);
      if (!response?.data) {
        toast.error(Constants.ERROR_GENERATE_TOKEN);
        console.error(Constants.ERROR_GENERATE_TOKEN);
        return;
      }
      toast.info(Constants.TOKEN_OK);
      console.log(Constants.TOKEN_OK);
      navigate(RoutePaths.RESET_PASSWORD);
      setLoading(false);
    } catch (error) {
      console.error(error);
      toast.error(error);
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
