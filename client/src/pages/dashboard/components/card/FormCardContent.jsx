import { CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const FormCardContent = ({ form }) => (
  <CardContent sx={{ flexGrow: 1 }} className="tags">
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography gutterBottom variant="h5" component="h2">
          {form?.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="caption" component="p">
          {form?.description}
        </Typography>
      </Grid>
    </Grid>
  </CardContent>
);

FormCardContent.propTypes = {
  form: PropTypes.object.isRequired,
};
export default FormCardContent;
