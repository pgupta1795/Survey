import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import {
  QuestionsContext,
  UserFormContext,
} from '../../../../../hooks/contexts';

const HeaderSection = () => {
  const formData = useContext(UserFormContext);
  const createContext = useContext(QuestionsContext);
  let title = createContext?.header?.title;
  if (!title) title = formData?.name;
  let description = createContext?.header?.description;
  if (!description) description = formData?.description;

  return (
    <Box sx={{ width: '100%' }}>
      <div className="edit-form-header">
        <Typography
          variant="h4"
          sx={{
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </div>
    </Box>
  );
};

export default HeaderSection;
