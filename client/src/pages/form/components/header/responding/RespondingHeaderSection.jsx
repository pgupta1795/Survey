import { Box, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const RespondingHeaderSection = ({ name, description, ...props }) => (
  <Box sx={{ width: '100%' }} className="edit-form-header">
    <Typography variant="h4" {...props}>
      {name}
    </Typography>
    <Typography variant="subtitle1">{description}</Typography>
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
