import PropTypes from 'prop-types';
import React from 'react';
import FieldTypes, { getKey } from '../../../../../helper/FieldTypes';
import useOptionsOnChange from '../../../../../hooks/useOptionsOnChange';
import EditableCheckboxOptionsView from './types/EditableCheckboxOptionsView';
import EditableRadioOptionsView from './types/EditableRadioOptionsView';
import EditableTextField from './types/EditableTextField';

const EditableAllOptionsView = ({ question, questionIndex }) => {
  const qType = question?.type;
  const handle = useOptionsOnChange();

  if (qType === getKey(FieldTypes, FieldTypes.TEXT_FIELD))
    return (
      <EditableTextField
        question={question}
        questionIndex={questionIndex}
        onChange={handle}
      />
    );

  if (qType === getKey(FieldTypes, FieldTypes.CHECKBOX))
    return (
      <EditableCheckboxOptionsView
        question={question}
        questionIndex={questionIndex}
        onChange={handle}
      />
    );

  if (qType === getKey(FieldTypes, FieldTypes.DROPDOWN))
    return (
      <EditableRadioOptionsView
        question={question}
        questionIndex={questionIndex}
        onChange={handle}
      />
    );

  if (qType === getKey(FieldTypes, FieldTypes.LINEAR))
    return (
      <EditableRadioOptionsView
        question={question}
        questionIndex={questionIndex}
        onChange={handle}
      />
    );

  return (
    <EditableRadioOptionsView
      question={question}
      questionIndex={questionIndex}
      onChange={handle}
    />
  );
};

EditableAllOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default React.memo(EditableAllOptionsView);
