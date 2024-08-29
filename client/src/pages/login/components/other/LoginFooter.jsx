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
      <Grid container className="text-xs mt-2">
        <Grid item xs>
          <Link href={RoutePaths.GENERATE_TOKEN}>
            {Constants.FORGOT_PASSWORD}
          </Link>
        </Grid>
        <Grid item>
          {form?.alternateName ? (
            <Link href={form?.alternateUrl}>
              {form?.alternateName === Constants.SIGN_IN
                ? Constants.HAVE_ACCOUNT
                : Constants.DONT_HAVE_ACCOUNT}
              {form?.alternateName}
            </Link>
          ) : null}
        </Grid>
      </Grid>
      <Copyright />
    </>
  );
};

export default LoginFooter;
