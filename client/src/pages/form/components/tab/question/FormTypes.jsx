import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getFormDataById,
  getTypes,
  setFormById,
  setSelectedType,
} from '../../../../../features/forms';

const FormTypes = () => {
  const dispatch = useDispatch();
  const { formId } = useParams();
  const formTypes = useSelector(getTypes);
  const form = useSelector((state) => getFormDataById(state, formId));
  const handleChange = (e) => {
    dispatch(setFormById({ formId, type: e.target.value }));
    dispatch(setSelectedType(e.target.value));
  };

  return (
    <FormControl fullWidth sx={{ mb: 4 }}>
      <Select onChange={handleChange} defaultValue={form?.type || formTypes[0]}>
        {formTypes.map((type) => (
          <MenuItem value={type} key={type}>
            <Typography variant="answer">{type}</Typography>
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Select Type of Form</FormHelperText>
    </FormControl>
  );
};

export default FormTypes;
