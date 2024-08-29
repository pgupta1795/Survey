import { FormControl, FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import MultilineTextField from '../../../../../../common/components/field/MultilineTextField';
import { debounce } from '../../../../../../common/utils/lodashUtils';
import FieldTypes from '../../../../../../helper/FieldTypes';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import Question from '../../../questions/noneditable/Question';
import { Constants } from '../../../tab';

const TexFieldOption = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.TEXT_FIELD
  );

  const saveResponse = debounce((value) => {
    handleChange(value, questionIndex);
  }, 300);

  return (
    <>
      <Question question={question} questionIndex={questionIndex} />
      <FormControl sx={{ width: '100%' }} error={!(values && values[0])}>
        <MultilineTextField
          placeholder="Add Text"
          sx={{ mt: 2, px: 1.5 }}
          defaultValue={values && values.length > 0 ? values[0] : ''}
          variant="standard"
          onInput={(e) => saveResponse(e.target.value)}
        />
        <FormHelperText>
          {!(values && values[0]) ? Constants.FORM_FILL_TEXT : null}
        </FormHelperText>
      </FormControl>
    </>
  );
};

TexFieldOption.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default TexFieldOption;
