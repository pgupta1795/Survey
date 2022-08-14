import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React, { useContext } from 'react';
import Constants from '../../../../helper/Constants';
import RoutePaths from '../../../../helper/RoutePaths';
import { FormContext } from '../../../../hooks/contexts';
import Copyright from '../fields/Copyright';

const LoginFooter = () => {
  const form = useContext(FormContext);

  return (
    <>
      <Grid container>
        <Grid item xs>
          <Link href={RoutePaths.GENERATE_TOKEN} variant="body2">
            {Constants.FORGOT_PASSWORD}
          </Link>
        </Grid>
        <Grid item>
          {form?.alternateName ? (
            <Link href={form?.alternateUrl} variant="body2">
              {Constants.DONT_HAVE_ACCOUNT}
              {form?.alternateName}
            </Link>
          ) : null}
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 8 }} />
    </>
  );
};

export default LoginFooter;
