import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React from 'react';

const BasicSectionBox = ({ children, section, sections }) => {
  const theme = useTheme();
  const currentIndex = sections?.findIndex((sec) => sec?._id === section?._id);
  const total = sections?.length;
  const secString = `"Section ${currentIndex + 1} of ${total}"`;

  return (
    <Box
      sx={{
        borderTop: `10px solid ${theme.palette.primary.main}`,
        position: 'relative',
        borderTopRightRadius: 4,
        mb: 1,
        '&:before': {
          position: 'absolute',
          display: 'flex',
          top: -41,
          py: 1,
          px: 0.5,
          zIndex: '100',
          backgroundColor: `${theme.palette.primary.main}`,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
          content: `${secString}`,
        },
      }}
    >
      {children}
    </Box>
  );
};

BasicSectionBox.propTypes = {
  children: PropTypes.any.isRequired,
  section: PropTypes.object.isRequired,
  sections: PropTypes.array.isRequired,
};
export default BasicSectionBox;
