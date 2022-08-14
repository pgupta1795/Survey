import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const FlexStartBox = ({ children, ...rest }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: '3px',
      paddingTop: '15px',
      paddingBottom: '15px',
      gap: 1.5,
      width: '100%',
    }}
    {...rest}
  >
    {children}
  </Box>
);

FlexStartBox.propTypes = {
  children: PropTypes.any.isRequired,
};
export default FlexStartBox;
