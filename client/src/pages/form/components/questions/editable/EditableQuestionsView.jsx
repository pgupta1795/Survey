import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionsContext } from '../../../../../hooks/contexts';
import UploadImage from '../commands/UploadImage';
import EditableImageView from './EditableImageView';
import EditableAllOptionsView from '../../options/editable/EditableAllOptionsView';
import MultilineTextField from '../../../../../common/components/field/MultilineTextField';

const EditableQuestionsView = ({ questionIndex, question }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const handleQuestionValue = (text, i) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions[i].text = text;
        return sec;
      })
    );

  return (
    <>
      <div className="edit-form-question">
        <Typography variant="subtitle1">{questionIndex + 1}.</Typography>
        <MultilineTextField
          placeholder="Question Text"
          sx={{ mb: 2 }}
          value={question.text}
          onInput={(e) => {
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
