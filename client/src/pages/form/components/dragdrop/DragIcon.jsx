import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Container from '@mui/material/Container';
import React from 'react';

const DragIcon = () => (
  <Container sx={{ display: 'flex', justifyContent: 'center' }}>
    <DragIndicatorIcon color="primary" sx={{ transform: 'rotate(-90deg)' }} />
  </Container>
);

export default DragIcon;
