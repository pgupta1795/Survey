import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import StarCommand from '../commands/StarCommand';
import SendCommand from '../commands/SendCommand';
import ChangeColorCommand from '../commands/ChangeColorCommand';
import ViewFormCommand from '../commands/ViewFormCommand';
import MoreToolbar from '../../../../common/components/other/MoreToolbar';

const options = [
  <StarCommand key="star" />,
  <ChangeColorCommand key="changecolor" />,
  <SendCommand key="send" />,
  <ViewFormCommand key="view" />,
];

const FormToolbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const commands = <>{options.map((option) => option)}</>;

  return (
    <Box
      sx={{ display: { xs: 'flex', md: 'flex' } }}
      alignItems="center"
      justifyContent="space-around"
    >
      {matches ? commands : <MoreToolbar commands={options} />}
    </Box>
  );
};

export default FormToolbar;
