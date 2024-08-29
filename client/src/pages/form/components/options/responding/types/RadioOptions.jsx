import PropTypes from 'prop-types';
import React from 'react';
import { scrollToNextField } from '../../../../../../common/utils/CommonUtils';
import FieldTypes from '../../../../../../helper/FieldTypes';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import Question from '../../../questions/noneditable/Question';
import RadioOptionsView from '../../noneditable/types/RadioOptionsView';

const RadioOptions = ({ question, questionIndex, ...rest }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.RADIO
  );

  return (
    <>
      <Question question={question} questionIndex={questionIndex} />
      <RadioOptionsView
        question={question}
        value={values && values.length > 0 ? values[0] : ''}
        onChange={(e) => {
          handleChange(e.target.value, questionIndex);
          scrollToNextField(e);
        }}
        {...rest}
      />
    </>
  );
};

RadioOptions.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default RadioOptions;
