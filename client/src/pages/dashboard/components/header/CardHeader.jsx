import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const CardHeader = () => (
  <Box
    sx={{
      pt: 3,
      pb: 3,
    }}
  >
    <Container maxWidth="sm">
      <Typography
        component="h3"
        variant="h2"
        align="center"
        gutterBottom
        color="inherit"
      >
        MY PLM SURVEY
      </Typography>
    </Container>
  </Box>
);

export default CardHeader;
