import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Settings from '../../../../Settings.json';
import SectionImage from '../basic/SectionImage';

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
            py: 0,
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
