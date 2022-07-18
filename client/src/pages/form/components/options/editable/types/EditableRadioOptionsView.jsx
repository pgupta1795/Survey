import React, { useContext } from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import AddOption from '../../../questions/commands/AddOption';
import EditableImageView from '../../../questions/editable/EditableImageView';
import RemoveOption from '../../../questions/commands/RemoveOption';
import UploadImage from '../../../questions/commands/UploadImage';
import { QuestionsContext } from '../../../../../../hooks/contexts';
import FullTextField from '../../../../../../common/components/field/FullTextField';

const EditableRadioOptionsView = ({ question, questionIndex }) => {
  const { section, setSections } = useContext(QuestionsContext);

  const handle = (text, i, j) =>
    setSections((prev) =>
      [...prev].map((sec) => {
        if (sec._id !== section._id) return sec;
        sec.questions[i].options[j].text = text;
        return sec;
      })
    );

  const radioOptions = question.options.map((op, j) => (
    <div key={`${op?._id}id2`}>
      <div className="edit-form-option">
        <Radio disabled />
        <FullTextField
          sx={{ mt: 1 }}
          value={question.options[j].text}
          onChange={(e) => handle(e.target.value, questionIndex, j)}
        />
        <UploadImage questionIndex={questionIndex} optionIndex={j} />
        <RemoveOption questionIndex={questionIndex} optionIndex={j} />
      </div>
      <EditableImageView
        questionIndex={questionIndex}
        optionIndex={j}
        option={op}
      />
    </div>
  ));

  return (
    <>
      <div style={{ width: '100%' }}>{radioOptions}</div>
      <FormControlLabel
        disabled
        control={<Radio />}
        label={<AddOption questionIndex={questionIndex} />}
      />
    </>
  );
};

EditableRadioOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default EditableRadioOptionsView;
