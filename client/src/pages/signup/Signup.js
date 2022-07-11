import * as React from 'react';
import Grid from '@mui/material/Grid';
import {
  LoginForm,
  Constants,
  ImageSlider,
  FormContext,
  RoutePaths,
} from './index';
import Footer from '../../common/components/header/Footer';

const Signup = () => (
  <Grid container component="main">
    <Grid
      item
      xs={false}
      sm={false}
      md={7}
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: 3,
        pr: 1,
        pl: 1,
        overflow: 'auto',
      }}
    >
      <ImageSlider />
    </Grid>
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      component="div"
      elevation={6}
      square="true"
    >
      <FormContext.Provider
        value={{
          name: Constants.SIGN_UP,
          alternateUrl: RoutePaths.LOGIN,
          alternateName: Constants.SIGN_IN,
        }}
      >
        <LoginForm />
      </FormContext.Provider>
    </Grid>
    <Footer />
  </Grid>
);

export default Signup;
