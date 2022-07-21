import React from 'react';
import PropTypes from 'prop-types';
import BasicOption from '../../../basic/BasicOption';
import FieldTypes, { getKey } from '../../../../../../helper/FieldTypes';
import MultilineTextField from '../../../../../../common/components/field/MultilineTextField';

const EditableTextField = ({ question, questionIndex, onChange }) => {
  const textOption = question.options.map((op, j) => (
    <BasicOption
      questionIndex={questionIndex}
      option={op}
      optionIndex={j}
      type={getKey(FieldTypes.TEXT_FIELD)}
      key={`${op?._id}-textfield`}
    >
      <MultilineTextField
        disabled
        placeholder="Add Text"
        sx={{ mb: 2, px: 3 }}
        value={question.options[j].text}
        onChange={(e) => {
          onChange(e.target.value, questionIndex, j);
        }}
      />
    </BasicOption>
  ));

  return <div style={{ width: '100%' }}>{textOption}</div>;
};

EditableTextField.defaultProps = {
  onChange: () => null,
};

EditableTextField.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};
export default EditableTextField;
