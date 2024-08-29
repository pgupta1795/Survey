import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Constants } from '../../../tab';

const DropDownOptionsView = ({ question, ...rest }) => (
  <FormControl
    size="small"
    sx={{ mx: 1.5, width: 'min(80%,auto)' }}
    error={!rest?.value}
  >
    <Select {...rest}>
      {question?.options?.map((op) => (
        <MenuItem value={op?.text} key={`${op?._id}dropdown`}>
          <span className="text-xs">{op?.text}</span>
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>
      {!rest?.value ? Constants.FORM_FILL_RADIO : null}
    </FormHelperText>
  </FormControl>
);

DropDownOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
};
export default DropDownOptionsView;
