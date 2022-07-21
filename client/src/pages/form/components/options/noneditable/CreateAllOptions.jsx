import React from 'react';
import PropTypes from 'prop-types';
import RadioOptionsView from './types/RadioOptionsView';
import FieldTypes, { getKey } from '../../../../../helper/FieldTypes';
import useOptionsOnChange from '../../../../../hooks/useOptionsOnChange';
import EditableTextField from '../editable/types/EditableTextField';
import CheckboxOptionsView from './types/ChecboxOptionsView';

const CreateAllOptions = ({ question, questionIndex, ...rest }) => {
  const qType = question?.type;
  const handle = useOptionsOnChange();

  if (qType === getKey(FieldTypes, FieldTypes.TEXT_FIELD))
    return (
      <EditableTextField
        question={question}
        questionIndex={questionIndex}
        onChange={handle}
        isWritable={false}
      />
    );

  if (qType === getKey(FieldTypes, FieldTypes.CHECKBOX))
    return <CheckboxOptionsView question={question} {...rest} />;

  if (qType === getKey(FieldTypes, FieldTypes.DROPDOWN))
    return <RadioOptionsView question={question} {...rest} />;

  if (qType === getKey(FieldTypes, FieldTypes.LINEAR))
    return <RadioOptionsView question={question} {...rest} row />;

  return <RadioOptionsView question={question} {...rest} />;
};

CreateAllOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default CreateAllOptions;
