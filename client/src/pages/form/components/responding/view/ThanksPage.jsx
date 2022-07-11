import { Button, Typography } from '@mui/material';
import React from 'react';
import FlexStartBox from '../../../../../common/components/card/FlexStartBox';

const ThanksPage = () => (
  <FlexStartBox>
    <Typography variant="body1">Form submitted</Typography>
    <Typography variant="body2">Thanks for submiting form</Typography>
    <Button onClick={() => window.location.reload(true)} sx={{ p: 0 }}>
      Submit another response
    </Button>
  </FlexStartBox>
);

export default ThanksPage;
