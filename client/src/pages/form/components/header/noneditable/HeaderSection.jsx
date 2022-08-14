import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const HeaderSection = () => {
  const createContext = useContext(QuestionsContext);
  const name = createContext?.section?.name;
  const description = createContext?.section?.description;

  return (
    <Box sx={{ width: '100%' }}>
      <div className="edit-form-header">
        <Typography
          variant="h4"
          sx={{
            mb: 1,
          }}
        >
          {name}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </div>
    </Box>
  );
};

export default HeaderSection;
