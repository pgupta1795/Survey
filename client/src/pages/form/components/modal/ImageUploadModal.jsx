import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import toast from '../../../../app/toast';
import useImage from '../../../../hooks/useImage';
import FormService from '../../services/FormService';

const ImageUploadModal = ({
  handleImagePopOpen,
  handleImagePopClose,
  contextData,
  updateImageLink,
}) => {
  const [image, field] = useImage();
  const [imageWarning, setImageWarning] = useState('');

  useEffect(() => {
    setImageWarning('');
    return () => {
      setImageWarning('');
    };
  }, [image]);

  const upload = async () => {
    if (image?.size === 0) return;
    if (image?.size > 3110670) {
      setImageWarning('File Size is too big');
      return;
    }

    try {
      const data = await FormService.uploadImage(image);
      const imageLink = `${data.host}/${data.image}`;
      handleImagePopClose(false);
      updateImageLink(imageLink, contextData);
    } catch (error) {
      setImageWarning(error);
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <Dialog
      open={handleImagePopOpen}
      onClose={handleImagePopClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Upload Image</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose Image to associate with the form
        </DialogContentText>
        {field}
        {imageWarning !== '' ? (
          <p className="image-error">{imageWarning}</p>
        ) : (
          ''
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={handleImagePopClose} color="primary">
          Cancel
        </Button>
        <Button color="primary" onClick={upload}>
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ImageUploadModal.propTypes = {
  handleImagePopOpen: PropTypes.bool.isRequired,
  handleImagePopClose: PropTypes.func.isRequired,
  contextData: PropTypes.any.isRequired,
  updateImageLink: PropTypes.func.isRequired,
};
export default ImageUploadModal;
