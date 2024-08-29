import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import { addBlueBG } from '../../../../common/utils/CommonUtils';
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

  const redirectTo = (user) => {
    if (!user) return;
    const redirectPath = getReDirectPath();
    console.log(Constants.RESETTED_PASSWORD);
    toast.info(Constants.RESETTED_PASSWORD);
    navigate(redirectPath);
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
      addBlueBG();
      setLoading(false);
    } catch (error) {
      toast.error(error);
      console.error(error);
    }
  };

  return (
    <div className="w-full px-4">
      <LoginHeader />
      {loading ? (
        <div className="inline-flex flex-col gap-0 gap-y-2 justify-center items-center w-full mt-3">
          <CircularProgress color="primary" sx={{ mt: 10 }} />
        </div>
      ) : (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          className="inline-flex flex-col gap-0 justify-center items-center w-full"
        >
          <Token autoFocus />
          <Password label="New Password" />
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

export default ResetForm;
