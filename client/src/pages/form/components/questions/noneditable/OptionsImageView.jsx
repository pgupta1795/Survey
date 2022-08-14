import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import React from 'react';

const OptionsImageView = ({ option }) => {
  const imgView = (
    <Container
      component="img"
      src={option.image}
      sx={{
        height: '65%',
        overflow: 'hidden',
        width: '65%',
        ml: 0,
      }}
    />
  );

  return option?.image !== '' ? imgView : '';
};

OptionsImageView.propTypes = {
  option: PropTypes.object.isRequired,
};
export default OptionsImageView;
