import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import SubmitButton from '../../../../common/components/button/SubmitButton';
import { addBlueBG } from '../../../../common/utils/CommonUtils';
import { isValidEmail } from '../../../../common/utils/lodashUtils';
import { FormContext } from '../../../../hooks/contexts';
import useReCaptcha from '../../../../hooks/useReCaptcha';
import { Constants } from '../../../login';
import Email from '../../../login/components/fields/Email';
import Organization from '../../../login/components/fields/Organization';
import Password from '../../../login/components/fields/Password';
import Username from '../../../login/components/fields/Username';
import LoginFooter from '../../../login/components/other/LoginFooter';
import LoginHeader from '../../../login/components/other/LoginHeader';
import UserService from '../../../login/services/UserService';

const SingupForm = () => {
  const [loading, setLoading] = useState(false);
  const { token, render, reRef } = useReCaptcha();
  const navigate = useNavigate();
  const form = useContext(FormContext);
  const [errors, setErrors] = useState({});

  const getValidationErrors = (data) => {
    const validationErrors = {};
    if (!data.organization) {
      validationErrors.organization = 'Organization is required';
    }
    if (!data.name) {
      validationErrors.name = 'Username is required';
    }
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
    console.log(Constants.LOGIN_OK);
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
        const response = await UserService.signup(data);
        if (response) redirectTo(response);
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
          className="inline-flex flex-col gap-0 gap-y-0 justify-center items-center w-full"
        >
          <Organization
            error={Boolean(errors.organization)}
            helperText={errors.organization}
            autoFocus
          />
          <Username error={Boolean(errors.name)} helperText={errors.name} />
          <Email error={Boolean(errors.email)} helperText={errors.email} />
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

export default SingupForm;
