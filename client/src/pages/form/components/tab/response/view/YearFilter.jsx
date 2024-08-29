import { FormControl, FormHelperText, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getError,
  getStatus,
  getYear,
  setYear,
} from '../../../../../../features/userResponse';
import { Constants } from '../../../../../signup';

const YearFilter = () => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const year = useSelector(getYear);
  const currentYear = new Date().getFullYear();

  const handleChange = (e) => {
    dispatch(setYear(e.target.value));
  };

  if (status === 'loading') return <div>LOADING...</div>;

  if (status === 'failed') return <div>{error}</div>;

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        sx={{ backgroundColor: 'primary.main' }}
        value={year}
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': Constants.FILTER_YEAR }}
      >
        {Array.from({ length: 4 }, (_, i) => (
          <MenuItem value={currentYear - i} key={currentYear - i}>
            {currentYear - i === year ? (
              <strong>{currentYear - i}</strong>
            ) : (
              currentYear - i
            )}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText sx={{ color: 'primary.main' }}>
        {Constants.FILTER_YEAR}
      </FormHelperText>
    </FormControl>
  );
};

export default YearFilter;
