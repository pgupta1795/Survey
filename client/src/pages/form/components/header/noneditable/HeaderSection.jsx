import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const HeaderSection = () => {
  const { header } = useContext(QuestionsContext);

  return (
    <Box sx={{ width: '100%' }}>
      <div className="edit-form-header">
        <Typography
          variant="h4"
          sx={{
            mb: 1,
          }}
        >
          {header?.title}
        </Typography>
        <Typography variant="subtitle1">{header?.description}</Typography>
      </div>
    </Box>
  );
};

export default HeaderSection;
