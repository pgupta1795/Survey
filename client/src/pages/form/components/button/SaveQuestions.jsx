import React, { useContext } from 'react';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import FormService from '../../services/FormService';
import { QuestionsContext, UserFormContext } from '../../../../hooks/contexts';

const SaveQuestions = () => {
  const formData = useContext(UserFormContext);
  const { header, questions, setQuestions } = useContext(QuestionsContext);

  const saveQuestions = async () => {
    try {
      console.log('Saving Questions');
      const data = {
        formId: formData._id,
        name: header.title,
        description: header.description,
        questions,
      };
      const result = await FormService.autoSave(data);
      setQuestions(result.questions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={saveQuestions}
      style={{ margin: '15px' }}
      endIcon={<SaveIcon />}
    >
      Save Questions{' '}
    </Button>
  );
};

export default SaveQuestions;
