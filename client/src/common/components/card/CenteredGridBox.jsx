import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const CenteredGridBox = ({ children, ...props }) => (
  <Grid sx={{ mt: '15px', mb: '7px', pb: '30px' }}>
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12} sm={5} style={{ width: '100%' }} {...props}>
        {children}
      </Grid>
    </Grid>
  </Grid>
);

CenteredGridBox.propTypes = {
  children: PropTypes.any.isRequired,
};
export default CenteredGridBox;
