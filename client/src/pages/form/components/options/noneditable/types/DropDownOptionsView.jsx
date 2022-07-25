import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

const DropDownOptionsView = ({ question, ...rest }) => (
  <FormControl size="small" sx={{ mx: 1.5, width: 'min(80%,auto)' }}>
    <Select {...rest}>
      {question?.options?.map((op) => (
        <MenuItem value={op?.text} key={`${op?._id}dropdown`}>
          <Typography variant="answer">{op?.text}</Typography>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

DropDownOptionsView.propTypes = {
  question: PropTypes.object.isRequired,
};
export default DropDownOptionsView;
