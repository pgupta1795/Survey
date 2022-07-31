import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';
import BasicOption from '../../../basic/BasicOption';
import FieldTypes, { getKey } from '../../../../../../helper/FieldTypes';
import FullTextField from '../../../../../../common/components/field/FullTextField';
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
