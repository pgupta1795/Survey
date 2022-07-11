import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const CardHeader = () => (
  <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 5,
      pb: 6,
    }}
  >
    <Container maxWidth="sm">
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Add PLM Survey
      </Typography>
    </Container>
  </Box>
);

export default CardHeader;
