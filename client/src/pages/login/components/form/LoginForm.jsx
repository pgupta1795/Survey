import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import { addBlueBG } from '../../../../common/utils/CommonUtils';
import { isValidEmail } from '../../../../common/utils/lodashUtils';
import useReCaptcha from '../../../../hooks/useReCaptcha';
import {
  Constants,
  Email,
  FormContext,
  LoginFooter,
  LoginHeader,
  Password,
  SubmitButton,
  UserService,
} from './index';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const form = useContext(FormContext);
  const [errors, setErrors] = useState({});
  const { token, render, reRef } = useReCaptcha();

  const getValidationErrors = (data) => {
    const validationErrors = {};
    if (!data.password) {
      validationErrors.password = 'Password is required';
    }
    if (!isValidEmail(data.email)) {
      validationErrors.email = 'Invalid email address';
    }
    return validationErrors;
  };

  const redirectTo = () => {
    const redirectPath = getReDirectPath();
    toast.info(Constants.LOGIN_OK);
    navigate(redirectPath);
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      reRef.current.reset();
      let data = new FormData(e.target);
      if (!data) return;
      data = Object.fromEntries(data);
      const newErrors = getValidationErrors(data);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        data = { ...data, token };
        const response = await UserService.login(data);
        if (response) redirectTo();
        addBlueBG();
      }
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
          className="inline-flex flex-col gap-0 gap-y-2 justify-center items-center w-full mt-3"
        >
          <Email
            error={Boolean(errors.email)}
            helperText={errors.email}
            autoFocus
          />
          <Password
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
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

export default LoginForm;
