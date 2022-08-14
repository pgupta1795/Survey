import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import useSectionImage from '../../../../hooks/useSectionImage';

const SectionImage = ({ name }) => {
  const { loading, error, image } = useSectionImage(`${name}.svg`);
  return loading || error ? (
    <Typography>LOADING</Typography>
  ) : (
    <CardMedia
      component="img"
      alt="section image"
      image={image}
      sx={{ transform: 'scale(0.75)' }}
    />
  );
};

SectionImage.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SectionImage;
