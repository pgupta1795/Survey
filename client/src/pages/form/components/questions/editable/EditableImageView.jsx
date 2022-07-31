import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import RemoveImage from '../commands/RemoveImage';

const EditableImageView = ({ questionIndex, optionIndex, option }) => {
  const imageView = (
    <Grid
      sx={{
        width: '150px',
        display: 'flex',
        alignItems: 'flex-start',
        pl: 4,
      }}
    >
      <img src={option.image} width="90px" height="auto" alt="" />
      <RemoveImage questionIndex={questionIndex} optionIndex={optionIndex} />
    </Grid>
  );
  return option.image && option.image !== '' ? imageView : '';
};

EditableImageView.defaultProps = {
  optionIndex: null,
};

EditableImageView.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  optionIndex: PropTypes.number,
  option: PropTypes.object.isRequired,
};
export default React.memo(EditableImageView);
