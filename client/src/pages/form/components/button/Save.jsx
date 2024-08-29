import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import toast from '../../../../app/toast';
import { getSelectedType } from '../../../../features/forms';
import { QuestionsContext, UserFormContext } from '../../../../hooks/contexts';
import FormService from '../../services/FormService';
import { Constants } from '../tab';

const Save = ({ formName }) => {
  const type = useSelector(getSelectedType);
  const formData = useContext(UserFormContext);
  const { sections } = useContext(QuestionsContext);

  const save = async () => {
    try {
      const data = {
        formId: formData._id,
        name: formName,
        sections,
        type,
      };
      const result = await FormService.autoSave(data);
      console.log(result);
      toast.info(Constants.SAVED);
    } catch (error) {
      console.error(error);
      toast.error(error);
      throw error;
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={save}
      endIcon={<SaveIcon />}
    >
      Save{' '}
    </Button>
  );
};

Save.defaultProps = {
  formName: '',
};

Save.propTypes = {
  formName: PropTypes.string,
};
export default Save;
