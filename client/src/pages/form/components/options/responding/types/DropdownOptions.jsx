import React from 'react';
import PropTypes from 'prop-types';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import FieldTypes from '../../../../../../helper/FieldTypes';
import DropDownOptionsView from '../../noneditable/types/DropDownOptionsView';

const DropdownOptions = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.DROPDOWN
  );

  return (
    <DropDownOptionsView
      question={question}
      value={values && values.length > 0 ? values[0] : ''}
      onChange={(e) => handleChange(e.target.value, questionIndex)}
    />
  );
};

DropdownOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default DropdownOptions;
