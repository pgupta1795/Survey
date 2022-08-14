import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React from 'react';

const SpaceBetweenBox = ({ children }) => (
  <Container
    component="div"
    sx={{
      minHeight: 128,
      flexGrow: 1,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    {children}
  </Container>
);

SpaceBetweenBox.propTypes = {
  children: PropTypes.any.isRequired,
};
export default SpaceBetweenBox;
