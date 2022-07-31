import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import AddOption from '../../../questions/commands/AddOption';
import FullTextField from '../../../../../../common/components/field/FullTextField';
import BasicOption from '../../../basic/BasicOption';
import FieldTypes, { getKey } from '../../../../../../helper/FieldTypes';

const EditableRadioOptionsView = ({ question, questionIndex, onChange }) => {
  const radioOptions = question.options.map((op, j) => (
    <BasicOption
      questionIndex={questionIndex}
      option={op}
      optionIndex={j}
      type={`${getKey(FieldTypes.RADIO)}`}
      key={`${op?._id}-radioField`}
    >
      <Radio disabled />
      <FullTextField
        sx={{ mt: 1 }}
        value={question.options[j].text}
        onInput={(e) => onChange(e.target.value, questionIndex, j)}
      />
    </BasicOption>
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

EditableRadioOptionsView.defaultProps = {
  onChange: () => null,
};

EditableRadioOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
export default React.memo(EditableRadioOptionsView);
