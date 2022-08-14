import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from '../../../../app/toast';
import { getReDirectPath } from '../../../../auth/services/AuthService';
import SubmitButton from '../../../../common/components/button/SubmitButton';
import { FormContext } from '../../../../hooks/contexts';
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
  const navigate = useNavigate();
  const form = useContext(FormContext);

  const redirectTo = async (user) => {
    if (!user) return;
    console.log(user);
    const redirectPath = await getReDirectPath();
    if (redirectPath) {
      console.log(Constants.LOGIN_OK);
      toast.info(Constants.LOGIN_OK);
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
      const response = await UserService.signup(data);
      if (response) redirectTo(response);
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
          <Organization />
          <Username />
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

export default SingupForm;
