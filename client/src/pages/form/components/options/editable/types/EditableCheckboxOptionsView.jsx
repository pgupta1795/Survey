import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import React from 'react';

import FullTextField from '../../../../../../common/components/field/FullTextField';
import FieldTypes, { getKey } from '../../../../../../helper/FieldTypes';
import BasicOption from '../../../basic/BasicOption';
import AddOption from '../../../questions/commands/AddOption';

const EditableCheckboxOptionsView = ({ question, questionIndex, onChange }) => {
  const checkboxOptions = question.options.map((op, j) => (
    <BasicOption
      questionIndex={questionIndex}
      option={op}
      optionIndex={j}
      type={getKey(FieldTypes.CHECKBOX)}
      key={`${op?._id}-checkbox-field`}
    >
      <Checkbox disabled />
      <FullTextField
        sx={{ mt: 1 }}
        value={question.options[j].text}
        onInput={(e) => onChange(e.target.value, questionIndex, j)}
      />
    </BasicOption>
  ));

  return (
    <>
      <div style={{ width: '100%' }}>{checkboxOptions}</div>
      <FormControlLabel
        disabled
        control={<Checkbox />}
        label={<AddOption questionIndex={questionIndex} />}
      />
    </>
  );
};

EditableCheckboxOptionsView.defaultProps = {
  onChange: () => null,
};

EditableCheckboxOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
export default EditableCheckboxOptionsView;
