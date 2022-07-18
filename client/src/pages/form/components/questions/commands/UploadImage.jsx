import CropOriginal from '@mui/icons-material/CropOriginal';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { QuestionsContext } from '../../../../../hooks/contexts';

const UploadImage = ({ questionIndex, optionIndex }) => {
  const { section, uploadImage } = useContext(QuestionsContext);

  return (
    <IconButton
      aria-label="upload image"
      onClick={() => {
        localStorage.setItem('section', JSON.stringify(section));
        uploadImage(questionIndex, optionIndex);
      }}
    >
      <CropOriginal color="primary" />
    </IconButton>
  );
};

UploadImage.defaultProps = {
  optionIndex: null,
};

UploadImage.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  optionIndex: PropTypes.number,
};
export default UploadImage;
