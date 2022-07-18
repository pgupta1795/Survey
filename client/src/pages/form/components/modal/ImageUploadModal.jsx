import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormService from '../../services/FormService';
import useImage from '../../../../hooks/useImage';
import { QuestionsContext } from '../tab';

const ImageUploadModal = ({
  handleImagePopOpen,
  handleImagePopClose,
  contextData,
}) => {
  const [image, field] = useImage();
  const [imageWarning, setImageWarning] = useState('');
  const { setSections } = useContext(QuestionsContext);

  useEffect(() => {
    setImageWarning('');
    return () => {
      setImageWarning('');
    };
  }, [image]);

  const updateImageLink = (link, context) => {
    const section = JSON.parse(localStorage.getItem('section'));
    const optionsOfQuestion = [...section.questions];
    const i = context?.question;

    if (context.option == null) {
      optionsOfQuestion[i].image = link;
    } else {
      const j = context?.option;
      optionsOfQuestion[i].options[j].image = link;
    }
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions = optionsOfQuestion;
        return sec;
      })
    );
    localStorage.removeItem('section');
  };

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
};
export default ImageUploadModal;
