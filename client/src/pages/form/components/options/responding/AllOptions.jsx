import React from 'react';
import PropTypes from 'prop-types';
import RadioOptions from './types/RadioOptions';
import FieldTypes, { getKey } from '../../../../../helper/FieldTypes';
import TexFieldOption from './types/TextFieldOption';
import CheckboxOptions from './types/CheckboxOptions';
import DropdownOptions from './types/DropdownOptions';

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
    return (
      <RadioOptions question={question} questionIndex={questionIndex} row />
    );

  return <RadioOptions question={question} questionIndex={questionIndex} />;
};

AllOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default AllOptions;
