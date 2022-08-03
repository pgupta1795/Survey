import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import SectionImage from '../basic/SectionImage';
import Settings from '../../../../Settings.json';

const ReportCard = ({ ...props }) => (
  <Grid item xs={12} {...props}>
    {Settings.SECTIONS?.map((section) => (
      <Card
        elevation={0}
        key={section.name}
        sx={{
          background: `inherit`,
          color: 'white',
          p: 1,
          width: '100%',
          height: '60vh',
        }}
      >
        <SectionImage name={section.name} />
        <CardContent>
          <Typography
            gutterBottom
            sx={{
              typography: { xs: 'small', sm: 'small', md: 'overline' },
            }}
          >
            <strong>{section.name}</strong>
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="p"
            sx={{ typography: { xs: 'small', sm: 'small', md: 'caption' } }}
          >
            {section.description}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Grid>
);

export default ReportCard;
