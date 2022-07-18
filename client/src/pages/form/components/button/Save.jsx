import React, { useContext } from 'react';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import FormService from '../../services/FormService';
import { QuestionsContext, UserFormContext } from '../../../../hooks/contexts';

const Save = ({ formName }) => {
  const formData = useContext(UserFormContext);
  const { sections } = useContext(QuestionsContext);

  const save = async () => {
    try {
      console.log('Saving Questions');
      const data = {
        formId: formData._id,
        name: formName,
        sections,
      };
      const result = await FormService.autoSave(data);
      console.log(result);
    } catch (error) {
      console.error(error);
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

Save.propTypes = {
  formName: PropTypes.string.isRequired,
};
export default Save;
