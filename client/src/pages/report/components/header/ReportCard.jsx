import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import SectionImage from '../basic/SectionImage';
import Settings from '../../../../Settings.json';

const ReportCard = ({ display, ...props }) => {
  const sectionSize = display === 'none' ? 'overline' : 'small';

  const descriptionSize = display === 'none' ? 'caption' : 'small';

  return (
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
            height: 'auto',
          }}
        >
          <SectionImage name={section.name} />
          <CardContent>
            <Typography
              gutterBottom
              sx={{
                typography: {
                  xs: `${sectionSize}`,
                  sm: `${sectionSize}`,
                  md: 'overline',
                },
              }}
            >
              <strong>{section.name}</strong>
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="p"
              sx={{
                typography: {
                  xs: `${descriptionSize}`,
                  sm: `${descriptionSize}`,
                  md: 'caption',
                },
              }}
            >
              {section.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

ReportCard.propTypes = {
  display: PropTypes.string.isRequired,
};
export default ReportCard;
