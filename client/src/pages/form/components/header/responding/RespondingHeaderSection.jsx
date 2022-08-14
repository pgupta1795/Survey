import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const RespondingHeaderSection = ({ name, description, ...props }) => (
  <Box sx={{ width: '100%' }} className="edit-form-header">
    <Typography variant="h4" {...props}>
      <strong>{name}</strong>
    </Typography>
    <Typography variant="h6">{description}</Typography>
  </Box>
);

RespondingHeaderSection.defaultProps = {
  name: null,
  description: null,
};

RespondingHeaderSection.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
export default RespondingHeaderSection;
