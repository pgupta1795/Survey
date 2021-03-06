import { Grid, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import SendCommand from '../commands/SendCommand';
import ViewFormCommand from '../commands/ViewFormCommand';
import MoreToolbar from '../../../../common/components/other/MoreToolbar';

const options = [<SendCommand key="send" />, <ViewFormCommand key="view" />];

const FormToolbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const commands = <>{options.map((option) => option)}</>;

  return (
    <Grid
      sx={{ display: { xs: 'flex', md: 'flex' } }}
      alignItems="center"
      justifyContent="space-around"
    >
      {matches ? commands : <MoreToolbar commands={options} />}
    </Grid>
  );
};

export default FormToolbar;
