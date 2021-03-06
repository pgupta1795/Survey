import React from 'react';
import PropTypes from 'prop-types';
import RadioOptionsView from '../../noneditable/types/RadioOptionsView';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import FieldTypes from '../../../../../../helper/FieldTypes';

const RadioOptions = ({ question, questionIndex, ...rest }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.RADIO
  );

  return (
    <RadioOptionsView
      question={question}
      value={values && values.length > 0 ? values[0] : ''}
      onChange={(e) => handleChange(e.target.value, questionIndex)}
      {...rest}
    />
  );
};

RadioOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default RadioOptions;
