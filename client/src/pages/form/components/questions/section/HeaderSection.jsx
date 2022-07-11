import { Grid, Paper, Typography, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { UserFormContext } from '../../../../../hooks/contexts';

const HeaderSection = () => {
  const theme = useTheme();
  const formData = useContext(UserFormContext);

  return (
    <Grid
      sx={{
        borderTop: `10px solid ${theme.palette.primary.main}`,
        borderRadius: 4,
      }}
    >
      <Paper elevation={2} sx={{ width: '100%' }}>
        <div className="edit-form-header">
          <Typography
            variant="h4"
            sx={{
              marginBottom: '15px',
            }}
          >
            {formData?.name}
          </Typography>
          <Typography variant="subtitle1">{formData?.description}</Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default HeaderSection;
