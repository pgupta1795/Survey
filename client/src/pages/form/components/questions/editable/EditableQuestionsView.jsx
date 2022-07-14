import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';
import UploadImage from '../commands/UploadImage';
import EditableImageView from './EditableImageView';
import EditableAllOptionsView from '../../options/editable/EditableAllOptionsView';
import EditableTextField from '../../options/editable/types/EditableTextField';

const EditableQuestionsView = ({ questionIndex, question }) => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  const handleQuestionValue = (text, i) => {
    const optionsOfQuestion = [...questions];
    optionsOfQuestion[i].text = text;
    setQuestions(optionsOfQuestion);
  };
  return (
    <>
      <div className="edit-form-question">
        <Typography variant="subtitle1">{questionIndex + 1}.</Typography>
        <EditableTextField
          placeholder="Question Text"
          sx={{ mb: 2 }}
          value={question.text}
          onChange={(e) => {
            handleQuestionValue(e.target.value, questionIndex);
          }}
        />
        <UploadImage questionIndex={questionIndex} />
      </div>
      <EditableImageView questionIndex={questionIndex} option={question} />
      <EditableAllOptionsView
        questionIndex={questionIndex}
        question={question}
      />
    </>
  );
};

EditableQuestionsView.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
};
export default EditableQuestionsView;
