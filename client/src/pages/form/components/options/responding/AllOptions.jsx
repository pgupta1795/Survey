import PropTypes from 'prop-types';
import React from 'react';
import FieldTypes, { getKey } from '../../../../../helper/FieldTypes';
import CheckboxOptions from './types/CheckboxOptions';
import DropdownOptions from './types/DropdownOptions';
import RadioOptions from './types/RadioOptions';
import TexFieldOption from './types/TextFieldOption';

const AllOptions = ({ question, questionIndex }) => {
  const qType = question?.type;

  if (qType === getKey(FieldTypes, FieldTypes.TEXT_FIELD))
    return <TexFieldOption question={question} questionIndex={questionIndex} />;

  if (qType === getKey(FieldTypes, FieldTypes.CHECKBOX))
    return (
      <CheckboxOptions question={question} questionIndex={questionIndex} />
    );

  if (qType === getKey(FieldTypes, FieldTypes.DROPDOWN))
    return (
      <DropdownOptions question={question} questionIndex={questionIndex} />
    );

  if (qType === getKey(FieldTypes, FieldTypes.LINEAR))
    return <RadioOptions question={question} questionIndex={questionIndex} />;

  return <RadioOptions question={question} questionIndex={questionIndex} />;
};

AllOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default AllOptions;
