import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import MoreToolbar from '../../../../common/components/other/MoreToolbar';
import SendCommand from '../commands/SendCommand';
import ViewFormCommand from '../commands/ViewFormCommand';

const FormToolbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const options = [<SendCommand key="send" />, <ViewFormCommand key="view" />];

  return (
    <Grid
      sx={{ display: { xs: 'flex', md: 'flex' } }}
      alignItems="center"
      justifyContent="space-around"
    >
      {matches ? (
        <>{options.map((option) => option)}</>
      ) : (
        <MoreToolbar commands={options} />
      )}
    </Grid>
  );
};

export default FormToolbar;
