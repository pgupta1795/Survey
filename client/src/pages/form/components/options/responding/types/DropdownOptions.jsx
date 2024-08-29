import PropTypes from 'prop-types';
import React from 'react';
import { scrollToNextField } from '../../../../../../common/utils/CommonUtils';
import FieldTypes from '../../../../../../helper/FieldTypes';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import Question from '../../../questions/noneditable/Question';
import DropDownOptionsView from '../../noneditable/types/DropDownOptionsView';

const DropdownOptions = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.DROPDOWN
  );

  return (
    <>
      <Question question={question} questionIndex={questionIndex} />
      <DropDownOptionsView
        question={question}
        value={values && values.length > 0 ? values[0] : ''}
        onChange={(e) => {
          handleChange(e.target.value, questionIndex);
          scrollToNextField(e);
        }}
      />
    </>
  );
};

DropdownOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default DropdownOptions;
