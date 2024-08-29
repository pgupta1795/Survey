import PropTypes from 'prop-types';
import React from 'react';
import { scrollToNextField } from '../../../../../../common/utils/CommonUtils';
import FieldTypes from '../../../../../../helper/FieldTypes';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import Question from '../../../questions/noneditable/Question';
import CheckboxOptionsView from '../../noneditable/types/CheckboxOptionsView';

const CheckboxOptions = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.CHECKBOX
  );

  return (
    <>
      <Question question={question} questionIndex={questionIndex} />
      <CheckboxOptionsView
        question={question}
        values={values}
        onChange={(e) => {
          handleChange(e.target.value, questionIndex, e.target.checked);
          scrollToNextField(e);
        }}
      />
    </>
  );
};

CheckboxOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default CheckboxOptions;
