import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const CardHeader = ({ text }) => (
  <Container maxWidth="sm">
    <Typography
      component="h3"
      variant="h5"
      align="center"
      gutterBottom
      sx={{ color: 'primary.main' }}
      className="tracking-wider"
    >
      {text.toUpperCase()}
    </Typography>
  </Container>
);

CardHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardHeader;
