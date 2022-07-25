import React from 'react';
import PropTypes from 'prop-types';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import FieldTypes from '../../../../../../helper/FieldTypes';
import CheckboxOptionsView from '../../noneditable/types/CheckboxOptionsView';

const CheckboxOptions = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.CHECKBOX
  );

  return (
    <CheckboxOptionsView
      question={question}
      values={values}
      onChange={(e) =>
        handleChange(e.target.value, questionIndex, e.target.checked)
      }
    />
  );
};

CheckboxOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default CheckboxOptions;
