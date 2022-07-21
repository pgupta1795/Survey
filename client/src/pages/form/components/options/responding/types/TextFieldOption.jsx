import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from '@mui/material';
import useHandleResponseChange from '../../../../../../hooks/useHandleResponseChange';
import MultilineTextField from '../../../../../../common/components/field/MultilineTextField';
import FieldTypes from '../../../../../../helper/FieldTypes';

const TexFieldOption = ({ question, questionIndex }) => {
  const { values, handleChange } = useHandleResponseChange(
    question,
    FieldTypes.TEXT_FIELD
  );

  return (
    <FormControl sx={{ width: '100%' }}>
      <MultilineTextField
        placeholder="Add Text"
        sx={{ my: 2, px: 1.5 }}
        value={values && values.length > 0 ? values[0] : ''}
        variant="standard"
        onChange={(e) => {
          handleChange(e.target.value, questionIndex);
        }}
      />
    </FormControl>
  );
};

TexFieldOption.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default TexFieldOption;
