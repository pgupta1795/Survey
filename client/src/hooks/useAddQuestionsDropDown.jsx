import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import BorderedMenuItem from '../common/components/form/BorderedMenuItem';

const useAddQuestionsDropDown = (values, icons) => {
  const [value, setValue] = useState(Object.keys(values)[0]);
  const handleChange = (event) => setValue(event.target.value);

  return {
    value,
    dropDownView: (
      <FormControl fullWidth size="small">
        <Select value={value} onChange={handleChange}>
          {Object.keys(values).map((key, index) =>
            index % 2 === 0 ? (
              <MenuItem value={key} key={key}>
                {icons[key]}
                {values[key]}
              </MenuItem>
            ) : (
              <BorderedMenuItem value={key} key={key}>
                {icons[key]}
                {values[key]}
              </BorderedMenuItem>
            )
          )}
        </Select>
      </FormControl>
    ),
  };
};

export default useAddQuestionsDropDown;
