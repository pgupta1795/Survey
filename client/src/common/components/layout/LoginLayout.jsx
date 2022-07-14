import * as React from 'react';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import Footer from '../header/Footer';
import { ImageSlider } from '../../../pages/login';

const LoginLayout = ({ children }) => (
  <Grid container component="main" sx={{ height: '100%' }}>
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
    <Grid item xs={12} sm={8} md={5} component="div" square="true">
      {children}
    </Grid>
    <Footer />
  </Grid>
);

LoginLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
export default LoginLayout;
