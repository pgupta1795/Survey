import { Grid, Link } from '@mui/material';
import React, { useContext } from 'react';
import Constants from '../../../../helper/Constants';
import { FormContext } from '../../../../hooks/contexts';
import Copyright from '../fields/Copyright';

const LoginFooter = () => {
  const form = useContext(FormContext);
  return (
    <>
      <Grid container>
        <Grid item xs>
          <Link href="/#" variant="body2">
            {Constants.FORGOT_PASSWORD}
          </Link>
        </Grid>
        <Grid item>
          <Link href={form?.alternateUrl} variant="body2">
            {Constants.DONT_HAVE_ACCOUNT}
            {form?.alternateName}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 8 }} />
    </>
  );
};

export default LoginFooter;
